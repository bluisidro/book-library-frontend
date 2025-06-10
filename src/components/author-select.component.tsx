import { Author } from "@/types/author.type";

interface AuthorSelectProps {
  authors: Author[];
  selectedAuthorId: number | 'new';
  onChange: (val: number | 'new') => void;
  isLoading?: boolean;
}

export function AuthorSelectComponent({
  authors,
  selectedAuthorId,
  onChange,
  isLoading = false,
}: AuthorSelectProps) {
  if (isLoading) {
    return (
      <select disabled className="bg-gray-800 text-white p-2 rounded">
        <option>Loading authors...</option>
      </select>
    );
  }

  return (
    <select
      value={selectedAuthorId}
      onChange={(e) => {
        const val = e.target.value;
        onChange(val === 'new' ? 'new' : Number(val));
      }}
      className="bg-gray-800 text-white p-2 rounded"
    >
      {authors.length === 0 ? (
        <option value="new">Add new author</option>
      ) : (
        <>
          {authors.map((a) => (
            <option key={a.id} value={a.id}>
              {a.first_name} {a.last_name}
            </option>
          ))}
          <option value="new">Add new author</option>
        </>
      )}
    </select>
  );
}
