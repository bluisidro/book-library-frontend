import { Edit2 } from "lucide-react";

export default function EditBookButtonComponent({ bookId }: { bookId: number }) {
    return (
        <a
            href={`/books/edit/${bookId}`}
            aria-label="Edit"
            title="Edit"
            className="text-gray-400 hover:text-gray-200 transition inline-flex items-center"
        >
            <Edit2 size={20} />
        </a>
    )
}