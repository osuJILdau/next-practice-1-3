// Эта страница выполняется на сервере.
export const dynamic = 'force-dynamic';

export default async function ServerDemo() {
  const time = new Date().toISOString();
  console.log('Server Component: сообщение в терминале');

  return (
    <main className="container inner-page">
      <span className="tag">Server Component</span>
      <h1>Серверный компонент</h1>
      <p>Время на сервере:</p>
      <div className="info-box">{time}</div>
      <p className="note">Сообщение console.log выводится в терминале сервера.</p>
    </main>
  );
}
