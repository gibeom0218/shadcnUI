'use client';
import { Header } from './_components/header';
import { Introduction } from './_components/introduce';
import { PageLinks } from './_components/page-links';

export default function Home() {
  return (
    <main className="flex-grow p-8">
      <Header />
      <Introduction />
      <PageLinks />
    </main>
  );
}
