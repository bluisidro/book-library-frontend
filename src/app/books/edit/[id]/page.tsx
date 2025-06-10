'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Book, UpsertBookPayload } from '@/types/book.type';
import { BookFormComponent } from '@/components/book-form.component';
import BackToListComponent from '@/components/back-to-list.component';
import { fetchAuthors } from '@/services/author.service';
import { Authors } from '@/types/author.type';
import { fetchBookById, updateBook } from '@/services/book.service';
import BooksLoaderComponent from '@/components/books-loader.component';

export default function EditBookPage() {
  const router = useRouter();
  const params = useParams();
  const bookId = Number(params.id);

  const [book, setBook] = useState<Book | null>(null);
  const [authors, setAuthors] = useState<Authors>({ data: [] });

  const [loading, setLoading] = useState(true);
  const [isAuthorsLoading, setIsAuthorsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedBook, authorsResponse] = await Promise.all([
          fetchBookById(bookId),
          fetchAuthors({ limit: 10, offset: 0 }),
        ]);

        setBook(fetchedBook);
        setAuthors(Array.isArray(authorsResponse.data) ? authorsResponse : { data: [] });
      } catch (err) {
        console.error('Failed to load book or authors', err);
      } finally {
        setLoading(false);
        setIsAuthorsLoading(false);
      }
    }

    if (bookId) loadData();
  }, [bookId]);

  const handleSave = async (updatedBook: UpsertBookPayload, id?: number) => {
    if (!id) return; // or throw an error if editing always requires ID

    try {
      await updateBook(id, updatedBook);
      router.push('/');
    } catch (error) {
      console.error('Failed to update book:', error);
    }
  };
  
  return (
    <main className="p-6 max-w-3xl mx-auto bg-gray-900 text-gray-200 rounded-lg shadow-md min-h-screen flex flex-col">
      <BooksLoaderComponent loading={loading} booksCount={1} loadingText='Loading book details...' noBooksFoundText='No book found.' />

      {!loading && book && (
        <>
          <BackToListComponent />
          <h1 className="text-2xl font-semibold mb-6">Edit Book</h1>
          <BookFormComponent
            initialBook={book}
            initialAuthors={authors.data}
            onSave={handleSave}
            isAuthorsLoading={isAuthorsLoading}
          />
        </>
      )}
    </main>
  );
}
