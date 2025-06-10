import { Author, Authors } from "@/types/author.type";
import { fetcher } from "@/lib/fetcher.lib";

const API_URL = "http://127.0.0.1:8081/api/author";

export async function fetchAuthors({
  limit = 10,
  offset = 0,
}: {
  limit: number;
  offset: number;
}): Promise<Authors> {
  return fetcher<Authors>(`${API_URL}?limit=${limit}&offset=${offset}`);
}

export type CreateAuthorPayload = Omit<
  Author,
  "id" | "books" | "created_at" | "updated_at"
>;

export async function addAuthor(payload: CreateAuthorPayload): Promise<Author> {
  return fetcher<Author>(API_URL, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function fetchAuthorById(id: number): Promise<Author> {
  return fetcher<Author>(`${API_URL}/${id}`);
}

export async function deleteAuthor(id: number): Promise<void> {
  await fetcher<void>(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
