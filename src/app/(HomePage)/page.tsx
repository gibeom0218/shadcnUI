import { Header } from './_components/header';
import { Introduction } from './_components/introduce';
import { PageLinks } from './_components/page-links';

export const metadata = {
  title: 'ShadcnUI Study',
  description:
    'This is a study page for exploring the features and components of shadcnUI',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <main className="flex-grow p-8">
      <Header />
      <Introduction />
      <PageLinks />
    </main>
  );
}
