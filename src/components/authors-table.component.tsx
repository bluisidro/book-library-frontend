import { Author } from "@/types/author.type";
import { Trash2 } from "lucide-react";

type Props = {
  authors: Author[];
  onDelete: (authorId: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function AuthorsTableComponent({ authors, onDelete, currentPage,
  totalPages,
  onPageChange, }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-700 rounded-lg bg-gray-800 ">
        <thead className="bg-gray-700 text-left">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="hidden sm:table-cell px-4 py-2 text-left">Email</th>
            <th className="hidden sm:table-cell px-4 py-2 text-left">Mobile</th>
            <th className="px-4 py-2 text-center">Books</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id} className="border-t border-gray-700">
              <td className="px-4 py-2">{author.first_name} {author.last_name}</td>
              <td className="hidden sm:table-cell px-4 py-2">{author.email}</td>
              <td className="hidden sm:table-cell px-4 py-2">{author.mobile}</td>
              <td className="px-4 py-2 text-center">{author.books.length}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => onDelete(author.id)}
                  disabled={author.books.length > 0}
                  className="p-2 rounded-full transition bg-gray-700 text-gray-300 
                    hover:text-red-500 hover:bg-gray-600 
                    disabled:hover:bg-gray-700 disabled:hover:text-gray-300 
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Trash2 size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 rounded bg-gray-700 text-sm disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-1 text-sm">{currentPage} / {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 rounded bg-gray-700 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
