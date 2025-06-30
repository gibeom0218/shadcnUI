import { Footer } from './(HomePage)/_components/footer';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-100">
        <main className="flex flex-1 items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
