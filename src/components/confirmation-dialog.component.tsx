import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmationDialog({ title, description, onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        {description && <p className="text-gray-300 mb-4">{description}</p>}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-3 py-1 text-sm rounded text-gray-300 hover:text-white hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
