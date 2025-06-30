import { pageLinks } from '@/constants/HomePage/page-links';
import Link from 'next/link';

export const PageLinks = () => {
  return (
    <section className="mb-8 rounded bg-white p-4 shadow">
      <h2 className="mb-4 text-2xl font-semibold">Components</h2>
      <p>List of components you want to implement:</p>
      <ul className="mt-4 flex flex-col">
        {pageLinks.map(({ name, href }) => (
          <li key={href}>
            <Link href={href} className="text-blue-500 underline">
              Go To {name} Page
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
