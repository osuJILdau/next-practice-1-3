'use server';

export async function greet(name: string): Promise<string> {
  const time = new Date().toISOString();
  return `Привет, ${name}! Время на сервере: ${time}`;
}
