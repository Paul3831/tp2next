import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <body className={`${inter.className} antialiased px-52 py-8 bg-blue-500 h-screen`}>{children}</body>
    </html>
  );
}
