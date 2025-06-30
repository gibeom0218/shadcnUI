import { Footer } from './(HomePage)/_components/footer';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
        {children}
        <Footer />
      </body>
    </html>
  );
}
