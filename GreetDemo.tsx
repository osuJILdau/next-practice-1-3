'use client';

import { useState } from 'react';
import { greet } from '../actions';

export default function GreetDemo() {
  const [message, setMessage] = useState('');

  async function sayHello() {
    const answer = await greet('Студент');
    setMessage(answer);
  }

  return (
    <section className="small-section">
      <h2>Server Function</h2>
      <p>Кнопка вызывает функцию на сервере.</p>
      <button className="button button-light" onClick={sayHello}>Поздороваться</button>
      {message && <div className="info-box">{message}</div>}
    </section>
  );
}
