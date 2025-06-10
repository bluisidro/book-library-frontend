// components/BookForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Author, UpsertAuthoPayload } from '@/types/author.type';
import { Book, UpsertBookPayload } from '@/types/book.type';
import { AuthorSelectComponent } from '@/components/author-select.component';
import { BookTitleInput } from '@/components/book-title-inpuit.component';
import { FormError } from '@/components/form-error.component';
import { FormSuccess } from '@/components/form-success.component';
import { NewAuthorForm } from '@/components/new-author-form.component';
import { SubmitButtonComponent } from '@/components/submit-button.component';
import { generateId, validateAuthor } from '@/utils/validate.utils';
import { addAuthor } from '@/services/author.service';

interface BookFormProps {
  initialBook?: Book;
  initialAuthors: Author[];
  isAuthorsLoading: boolean;
  onSave: (book: UpsertBookPayload, id?: number) => void
}

export function BookFormComponent({ initialBook, initialAuthors, isAuthorsLoading, onSave }: BookFormProps) {
  const [authors, setAuthors] = useState<Author[]>(initialAuthors);
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | 'new'>(
    initialBook
      ? initialBook.author_id
      : (initialAuthors.length > 0 ? initialAuthors[0].id : 'new')
  );

  useEffect(() => {
    setAuthors(initialAuthors);
    if (!initialBook && initialAuthors.length > 0) {
      setSelectedAuthorId(initialAuthors[0].id);
    }
  }, [initialAuthors, initialBook]);

  const [newAuthor, setNewAuthor] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
  });
  const [title, setTitle] = useState(initialBook ? initialBook.title : '');
  const [errors, setErrors] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const validateNewAuthor = () => {
    const error = validateAuthor(newAuthor);
    setErrors(error);
    return !error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    setSuccessMsg(null);

    if (!title.trim()) {
      setErrors('Book title is required.');
      return;
    }

    let authorId = selectedAuthorId;

    if (authorId === 'new') {
      const validationError = validateAuthor(newAuthor);
      if (validationError) {
        setErrors(validationError);
        return;
      }

      try {
        const createdAuthor = await addAuthor(newAuthor);
        setAuthors(prev => [...prev, createdAuthor]);
        authorId = createdAuthor.id;
        setSelectedAuthorId(createdAuthor.id);
        setNewAuthor({ first_name: '', last_name: '', email: '', mobile: '' });
      } catch (error) {
        setErrors('Failed to save new author.');
        return;
      }
    }

    const bookToSave: UpsertBookPayload = {
      author_id: authorId as number,
      title: title.trim(),
    };

    onSave(bookToSave, initialBook?.id);

    setSuccessMsg(initialBook ? 'Book updated successfully!' : 'Book added successfully!');
    if (!initialBook) {
      setTitle('');
    }
  };


  if (isAuthorsLoading) {
    return <div className="text-white">Loading authors...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-grow">
      <BookTitleInput value={title} onChange={setTitle} />

      <AuthorSelectComponent
        authors={authors}
        selectedAuthorId={selectedAuthorId}
        onChange={setSelectedAuthorId}
        isLoading={isAuthorsLoading}
      />

      {selectedAuthorId === 'new' && (
        <NewAuthorForm
          author={newAuthor}
          onChange={(field: keyof typeof newAuthor, val: string) =>
            setNewAuthor(prev => ({ ...prev, [field]: val }))
          }
        />
      )}

      <FormError message={errors} />
      <FormSuccess message={successMsg} />

      <SubmitButtonComponent />
    </form>
  );
}
