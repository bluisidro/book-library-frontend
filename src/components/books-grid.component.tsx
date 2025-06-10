import React from 'react';
import { Book } from '@/types/book.type';
import BookCardComponent from './book-card.component';
import BooksLoaderComponent from './books-loader.component'; // make sure path is correct
import { Author } from '@/types/author.type';

type Props = {
  books: Book[];
  loading: boolean;
  onDelete: (id: number) => void;
  onDeleteAuthor: (author: Author) => void;
};

export default function BooksGridComponent({
  books,
  loading,
  onDelete,
  onDeleteAuthor,
}: Props) {
  return (
    <>
      <BooksLoaderComponent loading={loading} booksCount={books.length} loadingText='Loading books...' noBooksFoundText='No books found.' />
      {!loading && books.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCardComponent
              key={book.id}
              book={book}
              onDelete={onDelete}
              onDeleteAuthor={onDeleteAuthor}
            />
          ))}
        </section>
      )}
    </>
  );
}
