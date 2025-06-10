import { Book } from '../types/book.type';

// Mock data (you can replace this with API calls later)
let books: Book[] = [
  {
    id: 1,
    created_at: '2025-06-01T10:00:00.000Z',
    updated_at: '2025-06-01T10:00:00.000Z',
    author_id: 1,
    title: 'The Art of Code',
  },
  {
    id: 2,
    created_at: '2025-06-02T12:15:00.000Z',
    updated_at: '2025-06-02T12:15:00.000Z',
    author_id: 1,
    title: 'Journey Through Time',
  },
  {
    id: 3,
    created_at: '2025-06-04T23:53:37.741Z',
    updated_at: '2025-06-04T23:53:37.741Z',
    author_id: 1,
    title: 'Journey to the Center of the Earth',
  },
  {
    id: 4,
    created_at: '2025-06-05T08:30:00.000Z',
    updated_at: '2025-06-05T08:30:00.000Z',
    author_id: 1,
    title: 'Mysteries of the Universe',
  },
  {
    id: 5,
    created_at: '2025-06-05T09:45:00.000Z',
    updated_at: '2025-06-05T09:45:00.000Z',
    author_id: 1,
    title: 'Deep Dive into React',
  },
  {
    id: 6,
    created_at: '2025-06-06T11:00:00.000Z',
    updated_at: '2025-06-06T11:00:00.000Z',
    author_id: 1,
    title: 'Secrets of the Mind',
  },
  {
    id: 7,
    created_at: '2025-06-06T15:20:00.000Z',
    updated_at: '2025-06-06T15:20:00.000Z',
    author_id: 1,
    title: 'Adventures in Coding',
  },
];

// Fetch all books
export function getBooks(): Book[] {
  return books;
}

// Find a book by id
export function getBookById(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}

// Add a new book
export function addBook(newBook: Book): void {
  books.push(newBook);
}

// Update a book by id
export function updateBook(id: number, updatedFields: Partial<Book>): void {
  books = books.map((book) =>
    book.id === id ? { ...book, ...updatedFields } : book
  );
}

// Delete a book by id
export function deleteBook(id: number): void {
  books = books.filter((book) => book.id !== id);
}
