import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'nextjs-vvedenie' },
    { slug: 'react-osnovy' },
  ];
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="container inner-page">
      <span className="tag">Динамический маршрут</span>
      <h1>Статья: {slug}</h1>
      <p>Адрес страницы зависит от параметра slug.</p>
      <Link href="/" className="back-link">← На главную</Link>
    </main>
  );
}
