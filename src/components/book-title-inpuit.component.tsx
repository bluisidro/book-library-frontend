interface BookTitleInputProps {
  value: string;
  onChange: (val: string) => void;
}

export function BookTitleInput({ value, onChange }: BookTitleInputProps) {
  return (
    <div>
      <label htmlFor="title" className="block mb-1 font-medium">
        Book Title
      </label>
      <input
        id="title"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter book title"
        className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}
