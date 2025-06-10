import { Author } from "@/types/author.type";
import { Book } from "@/types/book.type";
import { useState } from "react";
import AuthorDetailsModalComponent from "./author-details-modal.component";
import { DeleteBookButtonComponent } from "./delete-book-button.component";
import EditBookButtonComponent from "./edit-book-button.component";

type Props = {
  book: Book;
  onDelete: (id: number) => void;
  onDeleteAuthor: (author: Author) => void;
};

export default function BookCardComponent({
  book,
  onDelete,
  onDeleteAuthor
}: Props) {
  const [showAuthorModal, setShowAuthorModal] = useState(false);

  return (
    <article className="bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col justify-between min-h-[200px]">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold mb-3 text-gray-100 break-words line-clamp-3">{book.title}</h2>
        <EditBookButtonComponent bookId={book.id} />
      </div>

      <div className="flex items-end justify-between mt-auto pt-4">
        <div>
          <button
            onClick={() => setShowAuthorModal(true)}
            className="text-gray-400 font-medium hover:underline text-left"
          >
            Author: {book.author.first_name} {book.author.last_name}
          </button>
          <p className="text-gray-500 text-sm">Created: {new Date(book.created_at).toLocaleDateString()}</p>
        </div>
        <DeleteBookButtonComponent onDelete={() => onDelete(book.id)} />
      </div>

      {showAuthorModal && book.author && (
        <AuthorDetailsModalComponent authorId={book.author.id}
          onClose={() => setShowAuthorModal(false)}
          onDeleteAuthor={onDeleteAuthor}
        />
      )}
    </article>
  );
}
