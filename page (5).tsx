import AddToCartButton from './add-to-cart-button';

async function getProduct(id: string) {
  const products: Record<string, { name: string; price: number }> = {
    '1': { name: 'Ноутбук', price: 75000 },
    '2': { name: 'Мышь', price: 1500 },
  };

  return products[id] || null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return <main className="container inner-page"><h1>Товар не найден</h1></main>;
  }

  return (
    <main className="container inner-page">
      <span className="tag">Server + Client</span>
      <h1>{product.name}</h1>
      <p className="product-price">Цена: {product.price.toLocaleString('ru-RU')} ₽</p>
      <AddToCartButton />
    </main>
  );
}
