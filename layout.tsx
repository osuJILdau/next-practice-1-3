import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Практическая №1.3 — Next.js',
  description: 'Server и Client Components в Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="logo" href="/">Next.js <span>1.3</span></Link>
            <nav className="nav">
              <Link href="/">Главная</Link>
              <Link href="/about">О проекте</Link>
              <Link href="/server-demo">Сервер</Link>
              <Link href="/client-demo">Клиент</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">Практическая работа №1.3 · Next.js</footer>
      </body>
    </html>
  );
}
