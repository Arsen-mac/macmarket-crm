# Деплой

## VPS
1. Установить Docker и Node.js 20+.
2. Склонировать проект.
3. Создать `.env` из `.env.example` и задать сильный `AUTH_SECRET`.
4. `docker compose up -d postgres`
5. `npm ci`
6. `npx prisma migrate dev --name init` для первого развёртывания (после стабилизации схемы лучше `prisma migrate deploy`).
7. `npm run db:seed`.
8. `npm run build && npm start`.
9. Перед приложением поставить Nginx/Caddy и включить HTTPS.

## Важно для production
- Не использовать демо-пароль.
- Хранить секреты только в переменных окружения.
- Включить регулярные backup PostgreSQL.
- Добавить rate limiting/WAF перед публичным API.
- Для онлайн-кассы, эквайринга и SMS/WhatsApp подключить конкретного провайдера и его credentials.
