import { useState } from "react";
import { Trash2 } from "lucide-react";
import { ConfirmationDialog } from "./confirmation-dialog.component";

type Props = {
  onDelete: () => void;
};

export function DeleteBookButtonComponent({ onDelete }: Props) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="p-2 rounded-full transition bg-gray-700 text-gray-300 hover:text-red-500 hover:bg-gray-600"
        title="Delete book"
      >
        <Trash2 size={18} />
      </button>

      {showConfirm && (
        <ConfirmationDialog
          title="Delete this book?"
          description="This action cannot be undone."
          onConfirm={() => {
            onDelete();
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
}
