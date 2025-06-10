import { Book } from "./book.type";

export interface Author {
    id: number;
    created_at: Date;
    updated_at: Date;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    books: Book[] | [];
}

export interface Authors {
    data: Author[];
}

export type UpsertAuthoPayload = Pick<Author, 'first_name' | 'last_name' | 'email' | 'mobile'>;
