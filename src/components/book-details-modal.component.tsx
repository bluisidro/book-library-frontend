import { Book } from "@/types/book.type";
import { useEffect, useState } from "react";
import { fetchBookById } from "@/services/book.service"; // Your API function

type Props = {
  bookId: number | null;
  onClose: () => void;
};

export default function BookDetailsModal({ bookId, onClose }: Props) {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (bookId !== null) {
      fetchBookById(bookId)
        .then(setBook)
        .catch((err) => {
          console.error("Failed to fetch book details", err);
          setBook(null);
        });
    }
  }, [bookId]);

  if (!bookId || !book) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-gray-800 text-gray-100 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <p className="text-sm text-gray-400 mb-2">Author ID: {book.author_id}</p>
        <button
          onClick={onClose}
          className="mt-6 py-2 w-full rounded bg-gray-600 hover:bg-gray-500 text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
