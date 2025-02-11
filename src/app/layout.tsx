import Header from '@/components/header/Header';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Header />

        <div className="m-auto max-w-7xl p-4">{children}</div>
      </body>
    </html>
  );
}
