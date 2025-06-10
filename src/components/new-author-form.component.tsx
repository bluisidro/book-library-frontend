type AuthorFields = {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
};

interface NewAuthorFormProps {
  author: AuthorFields,
  onChange: (field: keyof AuthorFields, value: string) => void;
}

export function NewAuthorForm({ author, onChange }: NewAuthorFormProps) {
  return (
    <div className="space-y-4 mt-4 p-4 border border-gray-700 rounded-md bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">New Author Details</h2>

      <div>
        <label htmlFor="first_name" className="block mb-1">
          First Name
        </label>
        <input
          id="first_name"
          type="text"
          value={author.first_name}
          onChange={e => onChange('first_name', e.target.value)}
          className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      <div>
        <label htmlFor="last_name" className="block mb-1">
          Last Name
        </label>
        <input
          id="last_name"
          type="text"
          value={author.last_name}
          onChange={e => onChange('last_name', e.target.value)}
          className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={author.email}
          onChange={e => onChange('email', e.target.value)}
          className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      <div>
        <label htmlFor="mobile" className="block mb-1">
          Mobile
        </label>
        <input
          id="mobile"
          type="text"
          value={author.mobile}
          onChange={e => onChange('mobile', e.target.value)}
          placeholder="+639501234567"
          className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
    </div>
  );
}
