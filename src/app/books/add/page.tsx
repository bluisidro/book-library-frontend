// app/add/page.tsx or similar
'use client';

import { BookFormComponent } from '@/components/book-form.component';
import { addBook } from '@/services/book.service';
import { useRouter } from 'next/navigation';
import { getAuthors } from '@/lib/authors.lib'; // Or fetch from API
import { useEffect, useState } from 'react';
import { Author } from '@/types/author.type';
import { Book, UpsertBookPayload } from '@/types/book.type';
import BackToListComponent from '@/components/back-to-list.component';
import { fetchAuthors } from '@/services/author.service';

export default function AddBookPage() {
  const router = useRouter();
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isLoadingAuthors, setIsLoadingAuthors] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [authors] = await Promise.all([
          fetchAuthors({limit: 10, offset: 0}),
        ]);

        // Defensive fallback: ensure we always pass arrays
        setAuthors(Array.isArray(authors.data) ? authors.data : []);
      } catch (err) {
        console.error('Failed to load data', err);
        setAuthors([]);
      }
      finally {
        setIsLoadingAuthors(false);
      }

    }
    loadData();
  }, []);

  const handleSave = async (book: UpsertBookPayload) => {
    try {
      await addBook({
        title: book.title,
        author_id: book.author_id,
      });

      router.push('/'); // Redirect to home after successful add
    } catch (error) {
      console.error('Failed to add book:', error);
    }
  };

  return (
    <main className="p-6 max-w-3xl mx-auto bg-gray-900 text-gray-200 rounded-lg shadow-md min-h-screen flex flex-col">
      <BackToListComponent />
      <h1 className="text-2xl font-semibold mb-6">Add a New Book</h1>
      <BookFormComponent onSave={handleSave} initialAuthors={authors} isAuthorsLoading={isLoadingAuthors}
      />
    </main>
  );
}
