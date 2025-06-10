import { Author } from '@/types/author.type';

export function getAuthors(): Author[] {
  return authors;
}

export const authors: Author[] = [
  {
    id: 1,
    created_at: new Date('2025-06-04T23:53:24.466Z'),
    updated_at: new Date('2025-06-04T23:53:24.466Z'),
    first_name: 'Haruki',
    last_name: 'Murakami',
    email: 'haruki.murakami@example.com',
    mobile: '+639171234567',
    books: [
      {
        id: 101,
        created_at: '2025-06-04T23:53:37.741Z',
        updated_at: '2025-06-04T23:53:37.741Z',
        author_id: 1,
        title: 'Kafka on the Shore',
      },
    ],
  },
  {
    id: 2,
    created_at: new Date('2025-06-01T18:20:10.000Z'),
    updated_at: new Date('2025-06-01T18:20:10.000Z'),
    first_name: 'Jane',
    last_name: 'Austen',
    email: 'jane.austen@example.com',
    mobile: '+639188765432',
    books: [
      {
        id: 102,
        created_at: '2025-06-01T18:21:00.000Z',
        updated_at: '2025-06-01T18:21:00.000Z',
        author_id: 2,
        title: 'Pride and Prejudice',
      },
    ],
  },
  {
    id: 3,
    created_at: new Date('2025-05-20T10:00:00.000Z'),
    updated_at: new Date('2025-05-20T10:00:00.000Z'),
    first_name: 'George',
    last_name: 'Orwell',
    email: 'george.orwell@example.com',
    mobile: '+639199998888',
    books: [
      {
        id: 103,
        created_at: '2025-05-20T10:05:00.000Z',
        updated_at: '2025-05-20T10:05:00.000Z',
        author_id: 3,
        title: '1984',
      },
    ],
  },
];

export function getAuthorById(id: number): Author | undefined {
  return authors.find((a) => a.id === id);
}