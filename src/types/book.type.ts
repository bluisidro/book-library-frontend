import { Author } from "./author.type";

export interface Book {
  id: number;
  created_at: string;
  updated_at: string;
  author_id: number;
  title: string;
  author: Author;
}

export interface Books {
  data: Book[];
}

export type UpsertBookPayload = Pick<Book, "title" | "author_id">;
