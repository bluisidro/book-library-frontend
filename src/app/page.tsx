'use client';

import { useEffect, useState } from 'react';
import { Book } from '@/types/book.type';
import { Author } from '@/types/author.type';
import HeaderComponent from '@/components/header.component';
import BooksGridComponent from '@/components/books-grid.component';
import { deleteBook, fetchBooks } from '@/services/book.service';
import { deleteAuthor } from '@/services/author.service';

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (bookId: number) => {
    try {
      await deleteBook(bookId);
      loadBooks();
    } catch (err) {
      console.log('Failed to delete book', err);
    }
  };

  const loadBooks = async () => {
    setLoading(true);
    try {
      const [books] = await Promise.all([
        fetchBooks(),
      ]);

      // Defensive fallback: ensure we always pass arrays
      setBooks(Array.isArray(books.data) ? books.data : []);
    } catch (err) {
      console.error('Failed to load data', err);
      setBooks([]); // fallback to empty
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDeleteAuthor = async (author: Author) => {
    try {
      await deleteBook(author.books[0].id);
      await deleteAuthor(author.id);
      loadBooks();
    } catch (err) {
      console.error("Failed to delete author", err);
    }
  };

  return (
    <main className="bg-gray-900 min-h-screen p-8 max-w-6xl mx-auto text-gray-300 font-sans">
      <HeaderComponent />
      <BooksGridComponent
        books={books}
        loading={loading}
        onDelete={handleDelete}
        onDeleteAuthor={handleDeleteAuthor}
      />
    </main>
  );
}
