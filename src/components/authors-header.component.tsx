'use client';

import { UserPlus2 } from 'lucide-react';

type AuthorsHeaderProps = {
  onAddClick: () => void;
};

export default function AuthorsHeader({ onAddClick }: AuthorsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">Authors List</h1>
      <button
        onClick={onAddClick}
        className="inline-flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 text-gray-100 px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out font-semibold tracking-wide focus:outline-none focus:ring-4 focus:ring-gray-500/50 w-full sm:w-auto"
      >
        <UserPlus2 className="mr-2 h-5 w-5" /> Add Author
      </button>
    </div>
  );
}
