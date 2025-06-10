// services/book.service.ts

import { Book, Books, UpsertBookPayload } from '@/types/book.type';
import { fetcher } from '@/lib/fetcher.lib';

const API_URL = 'http://127.0.0.1:8081/api/book';

export async function fetchBooks(): Promise<Books> {
  return fetcher<Books>(API_URL);
}

export async function fetchBookById(id: number): Promise<Book> {
  return fetcher<Book>(`${API_URL}/${id}`);
}

export async function addBook(book: UpsertBookPayload): Promise<Book> {
  return fetcher<Book>(API_URL, {
    method: 'POST',
    body: JSON.stringify(book),
  });
}

export async function updateBook(id: number, book: UpsertBookPayload) {
  await fetcher(`${API_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(book),
  });
}

export async function deleteBook(id: number): Promise<void> {
  await fetcher<void>(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}
