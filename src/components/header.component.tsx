import React from 'react';
import AddBookButtonComponent from './add-book-button.component';
import { Users2 } from 'lucide-react';

export default function HeaderComponent() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
      <h1 className="text-4xl font-extrabold text-gray-100 drop-shadow-md">
        📚 My Book Library
      </h1>
      <div className="flex gap-3">
        <a
          href="/authors"
          className=" inline-flex items-center
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
          focus:ring-4 focus:ring-gray-500/50"
          aria-label="View authors"
          role="button"
        >
          <Users2 className="mr-2 h-5 w-5" /> View Authors
        </a>

        <AddBookButtonComponent />
      </div>

    </header>
  );
}
