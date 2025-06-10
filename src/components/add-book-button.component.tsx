import React from 'react';
import { BookOpen } from 'lucide-react';

export default function AddBookButtonComponent() {
  return (
    <a
      href="/books/add"
      className="
        inline-flex items-center
        bg-gradient-to-r from-gray-600 to-gray-700
        text-gray-100
        px-6 py-3
        rounded-xl
        shadow-md
        hover:shadow-lg
        hover:scale-105
        transform
        transition
        duration-300
        ease-in-out
        font-semibold
        tracking-wide
        select-none
        focus:outline-none
        focus:ring-4 focus:ring-gray-500/50
      "
      aria-label="Add a new book"
      role="button"
    >
      <BookOpen className="mr-2 h-5 w-5" />
      + Add Book
    </a>
  );
}
