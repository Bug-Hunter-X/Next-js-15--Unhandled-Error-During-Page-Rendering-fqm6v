# Next.js 15 Unhandled Page Rendering Error

This repository demonstrates a bug in Next.js 15 where errors thrown during page rendering are not handled gracefully.  The error message is not readily available to the user, leading to a poor user experience.

## Bug Report

When a page component throws an error, Next.js 15 doesn't display a user-friendly error message.  Instead, it may result in a blank page or a generic error.

## Solution

The solution involves implementing proper error handling within the page component itself and utilizing Next.js's error handling capabilities to provide a better user experience.  This can involve using try...catch blocks to handle exceptions and creating custom error pages.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You'll observe an error, and the user will not see a clear indication of what went wrong.
