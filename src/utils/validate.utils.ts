import { Author } from '@/types/author.type';
import { emailRegex, mobileRegex } from './regex.utils';

export function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}

export function validateMobile(mobile: string): boolean {
  return mobileRegex.test(mobile);
}

export function validateAuthor(author: Partial<Author>): string | null {
  if (!author.first_name || !author.first_name.trim()) {
    return 'First name is required';
  }
  if (!author.last_name || !author.last_name.trim()) {
    return 'Last name is required';
  }
  if (!author.email || !author.email.trim()) {
    return 'Email is required';
  }
  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(author.email)) {
    return 'Invalid email format';
  }
  if (!author.mobile || !author.mobile.trim()) {
    return 'Mobile number is required';
  }
  // Simple mobile regex validation (digits and +)
  const mobileRegex = /^\+?\d{7,15}$/;
  if (!mobileRegex.test(author.mobile)) {
    return 'Invalid mobile number format';
  }
  return null;
}


/**
 * Generate a unique numeric ID given an array of existing items with id.
 */
export function generateId<T extends { id: number }>(items: T[]): number {
  if (!items.length) return 1;
  return Math.max(...items.map(item => item.id)) + 1;
}