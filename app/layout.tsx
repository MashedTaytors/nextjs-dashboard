// This is called a root layout and is required. Any UI you add to the root layout will be shared across all pages in your application

import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
