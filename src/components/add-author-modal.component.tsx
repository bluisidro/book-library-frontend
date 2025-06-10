'use client';
import { useState } from 'react';
import { addAuthor } from '@/services/author.service';

type Props = {
  onClose: () => void;
  onCreated: () => void;
};

export default function AddAuthorModalComponent({ onClose, onCreated }: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addAuthor({ first_name: firstName, last_name: lastName, email, mobile });
      onCreated(); // refresh list
      onClose();
    } catch (err) {
      alert('Failed to create author');
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full text-gray-200">
        <h2 className="text-xl font-bold mb-4">Add New Author</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
            className="w-full p-2 bg-gray-700 rounded"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
