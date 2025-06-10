import { fetchAuthorById } from "@/services/author.service";
import { Author } from "@/types/author.type";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  authorId: number;
  onClose: () => void;
  onDeleteAuthor: (author: Author) => void;
};

export default function AuthorDetailsModalComponent({ authorId,
  onClose, onDeleteAuthor }: Props) {
  const [author, setAuthor] = useState<Author>();
  const [bookCount, setBookCount] = useState<number>(0);

  useEffect(() => {
    async function loadData() {
      try {
        const [author] = await Promise.all([
          fetchAuthorById(authorId)
        ]);

        setAuthor(author)
        setBookCount(author.books.length);
      } catch (err) {
        console.error('Failed to load data', err);
        setAuthor(undefined);
      }
    }
    loadData();
  }, [authorId])

  const handleDelete = async () => {
    if (bookCount > 1) {
      alert("Cannot delete author while they have linked books.");
      return;
    }

    const confirmDelete = confirm(
      "Are you sure you want to delete this author?"
    );

    if (confirmDelete && author) {
      onDeleteAuthor(author)
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-gray-800 text-gray-100 p-6 rounded-xl shadow-xl w-full max-w-md">
        <div className="flex justify-between items-start space-x-4">
          {/* Author details on left */}
          <div className="flex-1">
            <h2 className="text-xl font-bold">
              {author?.first_name} {author?.last_name}
            </h2>
            <p className="text-sm text-gray-400">Email: {author?.email}</p>
            <p className="text-sm text-gray-400">Mobile: {author?.mobile}</p>


          </div>

          {/* Delete button on right */}
          <button
            onClick={handleDelete}
            disabled={bookCount > 1}
            aria-label="Delete author"
            className="p-2 rounded-full transition bg-gray-700 text-gray-300 
             hover:text-red-500 hover:bg-gray-600 
             disabled:hover:bg-gray-700 disabled:hover:text-gray-300 
             disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete book"
          >
            <Trash2 size={24} />
          </button>
        </div>

        {bookCount > 0 && (
          <div className="bg-yellow-800 p-2 mt-2 rounded text-yellow-200 max-w">
            <p>
              This author is linked to <strong>{bookCount}</strong> book
              {bookCount > 1 ? "s" : ""}. {bookCount >1? "Please remove those books before deleting the author." : "If you delete this author, the book will also be deleted."}
            </p>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-2 text-sm bg-gray-600 hover:bg-gray-500 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}