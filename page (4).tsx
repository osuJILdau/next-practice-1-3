import Link from 'next/link';

const pages = [
  { name: 'Server Component', url: '/server-demo', text: 'Время на сервере и async/await.' },
  { name: 'Client Component', url: '/client-demo', text: 'Счётчик и серверное приветствие.' },
  { name: 'О нас', url: '/about', text: 'Пример статической страницы.' },
  { name: 'Блог: Next.js', url: '/blog/nextjs-vvedenie', text: 'Динамический маршрут с параметром.' },
  { name: 'Блог: React', url: '/blog/react-osnovy', text: 'Вторая заранее создаваемая страница.' },
  { name: 'Товар', url: '/products/1', text: 'Серверные данные и кнопка «В корзину».' },
];

export default function HomePage() {
  return (
    <main className="container">
      <section className="intro">
        <span className="tag">Практическая работа №1.3</span>
        <h1>Server и Client Components</h1>
        <p>Примеры работы с компонентами и маршрутами в Next.js.</p>
      </section>

      <section className="cards">
        {pages.map((page) => (
          <Link className="card" key={page.url} href={page.url}>
            <h2>{page.name}</h2>
            <p>{page.text}</p>
            <span className="card-link">Открыть →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
