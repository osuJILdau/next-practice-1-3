'use client';

import { useState } from 'react';
import GreetDemo from './GreetDemo';

export default function ClientDemo() {
  const [count, setCount] = useState(0);
  console.log('Client Component: компонент работает в браузере');

  return (
    <main className="container inner-page">
      <span className="tag">Client Component</span>
      <h1>Клиентский компонент</h1>
      <p>Нажми кнопку, чтобы увеличить счётчик.</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Кликов: {count}
      </button>
      <GreetDemo />
    </main>
  );
}
