/**
 * regex.utils.ts
 * 
 * This module contains commonly used regular expressions
 * for validating inputs such as emails and mobile phone numbers.
 */

/**
 * Regular expression for validating email addresses.
 * 
 * Matches a typical email pattern:
 * - One or more characters that are not spaces or '@'
 * - Followed by '@'
 * - Then a domain name with at least one dot-separated segment
 * 
 * Example valid emails:
 * - user@example.com
 * - user.name+tag+sorting@example.co.uk
 */
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Regular expression for validating mobile phone numbers.
 * 
 * Accepts:
 * - An optional leading plus sign '+'
 * - Followed by 7 to 15 digits (international format)
 * 
 * Examples:
 * - +12345678901
 * - 9876543210
 */
export const mobileRegex = /^\+?\d{7,15}$/;
