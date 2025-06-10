interface SubmitButtonProps {
  label?: string;
  disabled?: boolean;
}

export function SubmitButtonComponent({ label = "Add Book", disabled = false }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full py-3 rounded-md transition font-semibold text-gray-200 ${
        disabled
          ? 'bg-gray-600 cursor-not-allowed'
          : 'bg-gray-700 hover:bg-gray-600'
      }`}
    >
      {label}
    </button>
  );
}
