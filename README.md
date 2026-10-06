# Macmarket CRM

Полноценный стартовый full-stack CRM для магазина техники.

## Стек
- Next.js + React + TypeScript
- PostgreSQL + Prisma ORM
- JWT session cookie
- Zod validation
- REST API

## Запуск
1. Установить Node.js 20+ и PostgreSQL.
2. Скопировать `.env.example` в `.env` и указать `DATABASE_URL` и `AUTH_SECRET`.
3. `npm install`
4. `npx prisma db push`
5. `npm run db:seed`
6. `npm run dev`
7. Открыть `http://localhost:3000`

Демо-вход: `admin@macmarket.local` / `admin123`.

## Основные API
- `POST /api/auth/login`
- `GET /api/products`, `POST /api/products`
- `GET /api/clients`, `POST /api/clients`
- `GET /api/orders`, `POST /api/orders`, `PATCH /api/orders/:id`
- `GET /api/sales`, `POST /api/sales`
- `GET /api/dashboard`

## Production
Для production заменить `AUTH_SECRET`, использовать managed PostgreSQL, HTTPS, резервное копирование БД, rate limiting и внешний провайдер платежей/кассы.
