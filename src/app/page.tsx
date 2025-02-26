'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-center text-3xl font-bold">ShadcnUI Study Page</h1>
      </header>

      <main className="flex-grow">
        <section className="mb-8 rounded bg-white p-4 shadow">
          <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
          <p>
            This is a study page for exploring the features and components of
            shadcnUI. You can create various components and test their
            functionality here.
          </p>
        </section>

        <section className="mb-8 rounded bg-white p-4 shadow">
          <h2 className="mb-4 text-2xl font-semibold">Components</h2>
          <p>List of components you want to implement:</p>
          <ul className="ml-6 flex list-disc flex-col">
            <Link href={'/ButtonPage'} className="text-blue-500 underline">
              Go To Button Page
            </Link>
            <Link href={'/DialogPage'} className="text-blue-500 underline">
              Go To Dialog Page
            </Link>
            <Link href={'/ButtonPage'} className="text-blue-500 underline">
              Go To Modal Page
            </Link>
            <Link href={'/ButtonPage'} className="text-blue-500 underline">
              Go To Dropdown Page
            </Link>
            <Link href={'/ButtonPage'} className="text-blue-500 underline">
              Go To Input Field Page
            </Link>
          </ul>
        </section>
      </main>

      <footer className="mt-8 text-center">
        <p className="text-sm text-gray-500">© 2025 ShadcnUI Study Page</p>
      </footer>
    </div>
  );
}
