import Link from 'next/link';

export const PageLinks = () => {
  return (
    <section className="mb-8 rounded bg-white p-4 shadow">
      <h2 className="mb-4 text-2xl font-semibold">Components</h2>
      <p>List of components you want to implement:</p>
      <ul className="ml-6 flex list-disc flex-col">
        <li>
          <Link href="/ButtonPage" className="text-blue-500 underline">
            Go To Button Page
          </Link>
        </li>
        <li>
          <Link href="/DialogPage" className="text-blue-500 underline">
            Go To Dialog Page
          </Link>
        </li>
        <li>
          <Link href="/AccordionPage" className="text-blue-500 underline">
            Go To Accordion Page
          </Link>
        </li>
        <li>
          <Link href="/CardPage" className="text-blue-500 underline">
            Go To Card Page
          </Link>
        </li>
        <li>
          <Link href="/CalendarPage" className="text-blue-500 underline">
            Go To Calendar Page
          </Link>
        </li>
        <li>
          <Link href="/FormPage" className="text-blue-500 underline">
            Go To Form Page
          </Link>
        </li>
      </ul>
    </section>
  );
};
