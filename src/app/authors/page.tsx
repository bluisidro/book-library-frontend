'use client';

import { useEffect, useState } from 'react';
import { Author } from '@/types/author.type';
import { fetchAuthors, deleteAuthor } from '@/services/author.service';
import { deleteBook } from '@/services/book.service';

import BackToListComponent from '@/components/back-to-list.component';
import AuthorsTableComponent from '@/components/authors-table.component';
import AddAuthorModalComponent from '@/components/add-author-modal.component';
import AuthorsHeader from '@/components/authors-header.component';
import AuthorsLoaderComponent from '@/components/authors-loader.component';

const PAGE_SIZE = 10;

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const totalPages = Math.ceil(authors.length / PAGE_SIZE);

  const loadAuthors = async () => {
    setLoading(true);
    try {
      const res = await fetchAuthors({ limit: PAGE_SIZE, offset: currentPage - 1 });
      setAuthors(res.data || []);
    } catch (err) {
      console.error('Failed to load authors', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAuthors();
  }, [currentPage]);

  const handleDeleteAuthor = async (authorId: number) => {
    const author = authors.find((a) => a.id === authorId);
    if (!author) return;

    if (author.books.length > 1) {
      alert('Cannot delete author who still has books.');
      return;
    }

    if (!confirm(`Are you sure you want to delete author ${author.first_name} ${author.last_name}?`)) return;

    try {
      if (author.books.length === 1) await deleteBook(author.books[0].id);
      await deleteAuthor(authorId);
      loadAuthors();
    } catch (err) {
      console.error('Failed to delete author', err);
      alert('Failed to delete author. Please try again.');
    }
  };

  return (
    <main className="bg-gray-900 min-h-screen p-4 sm:p-8 max-w-6xl mx-auto text-gray-300 font-sans">
      <BackToListComponent />
      <AuthorsHeader onAddClick={() => setShowAddModal(true)} />
      <AuthorsLoaderComponent loading={loading} authorsCount={authors.length} />

      {!loading && authors.length > 0 && (
        <AuthorsTableComponent
          authors={authors}
          onDelete={handleDeleteAuthor}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}

      {showAddModal && (
        <AddAuthorModalComponent onClose={() => setShowAddModal(false)} onCreated={loadAuthors} />
      )}
    </main>
  );
}
