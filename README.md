# Практическая работа №1.3 — Server и Client Components

Проект на Next.js 15, React и TypeScript. Сделан по заданию о серверных и клиентских компонентах.

## Запуск

Нужен Node.js 20 или новее.

```bash
npm install
npm run dev
```

Открыть в браузере: http://localhost:3000

Для проверки:

```bash
npm run typecheck
npm run lint
npm run build
```

## Страницы проекта

| Адрес | Что показывает |
| --- | --- |
| `/` | Главная страница со ссылками |
| `/server-demo` | Серверный компонент с текущим временем и `console.log` в терминале |
| `/client-demo` | Клиентский счётчик и вызов Server Function `greet()` |
| `/about` | Статическая страница |
| `/blog/nextjs-vvedenie` | Динамическая статья |
| `/blog/react-osnovy` | Ещё одна динамическая статья |
| `/products/1` | Ноутбук и интерактивная кнопка «В корзину» |
| `/products/2` | Мышь и интерактивная кнопка |

## Основные файлы

- `app/page.tsx` — главная страница.
- `app/layout.tsx` — общий каркас сайта.
- `app/globals.css` — стили.
- `app/server-demo/page.tsx` — пример Server Component.
- `app/client-demo/page.tsx` — пример Client Component со счётчиком.
- `app/client-demo/GreetDemo.tsx` — вызов серверной функции.
- `app/actions.ts` — серверная функция с `'use server'`.
- `app/about/page.tsx` — статическая страница.
- `app/blog/[slug]/page.tsx` — динамическая страница и `generateStaticParams`.
- `app/products/[id]/page.tsx` — серверная загрузка товара.
- `app/products/[id]/add-to-cart-button.tsx` — кнопка на клиенте.

## Ответы на вопросы

**1. Зачем `app/`, `public/` и `next.config.js`?**
`app/` хранит страницы и маршруты. `public/` — картинки и другие файлы. `next.config.js` (в этом проекте `next.config.ts`) — настройки Next.js.

**2. Какие файлы нужны для маршрутов?**
`page.tsx` создаёт страницу, `layout.tsx` — общий вид страниц. `loading.tsx` показывает загрузку, `error.tsx` — ошибки, `route.ts` — API.

**3. Чем отличаются Server и Client Components?**
Серверный выполняется на сервере, а клиентский позволяет работать с кнопками и состояниями в браузере.

**4. Когда писать `'use client'`?**
Когда используешь `useState`, события вроде `onClick` или другой код для браузера.

**5. Как сделать динамический маршрут?**
Создать папку `[slug]` и файл `page.tsx`. В Next.js 15 параметр можно получить так: `const { slug } = await params`.

**6. Для чего `generateStaticParams`?**
Чтобы заранее собрать страницы для указанных параметров, например двух статей блога.

**7. Почему Server Component не увеличивает клиентский JS?**
Потому что его код выполняется на сервере и не отправляется браузеру.

## Что проверять

1. На `/server-demo` отображается время, а сообщение видно в терминале.
2. На `/client-demo` увеличивается счётчик и работает кнопка «Поздороваться».
3. На `/about` отображается статическая страница.
4. На `/blog/nextjs-vvedenie` показано название статьи.
5. На `/products/1` кнопка меняет надпись на «Добавлено!».
