```javascript
// pages/about.js

export default function About() {
  try {
    // Code that might throw an error
    throw new Error('Intentional error for demonstration');
  } catch (error) {
    // Error handling
    console.error('Error in About page:', error);
    return (
      <div>
        <h1>An error occurred</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```