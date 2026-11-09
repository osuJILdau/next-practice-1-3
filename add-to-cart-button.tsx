'use client';

import { useState } from 'react';

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);

  return (
    <button className="button" onClick={() => setAdded(true)} disabled={added}>
      {added ? 'Добавлено!' : 'В корзину'}
    </button>
  );
}
