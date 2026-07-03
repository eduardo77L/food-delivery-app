# Food Delivery App

Plataforma de delivery estilo iFood/Rappi, construída com arquitetura de microsserviços.

## Arquitetura

```
Frontend (React)
      │
      ▼
API Gateway (NestJS)
      │
      ├──► Auth Service (NestJS + PostgreSQL)
      ├──► User Service (NestJS + PostgreSQL)
      ├──► Restaurant Service (NestJS + PostgreSQL)
      ├──► Order Service (NestJS + PostgreSQL)
      └──► Notification Service (NestJS)
```

## Stack

| Camada | Tecnologia |
|--------|------------|
| Frontend | React + Vite |
| Backend | NestJS |
| Banco de dados | PostgreSQL (um por serviço) |
| ORM | Prisma |
| Autenticação | JWT |
| Comunicação | REST |
| Containerização | Docker + Docker Compose |
| Deploy frontend | Vercel |
| Deploy backend/DB | Railway |

## Estrutura do projeto

```
food-delivery-app/
├── docker-compose.yml
├── frontend/                 # React (Vite)
├── api-gateway/              # Ponto de entrada único
├── auth-service/             # Registro, login, JWT
├── user-service/             # Perfil, endereços
├── restaurant-service/       # Restaurantes e cardápio
├── order-service/            # Pedidos e status
└── notification-service/     # Notificações
```

## Como rodar localmente

### Pré-requisitos

- Node.js 20+
- Docker Desktop

### Subir tudo com Docker

```bash
docker compose up --build
```

| Serviço | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| API Gateway | http://localhost:3001 |

### Desenvolvimento (sem Docker)

Cada serviço tem seu próprio `package.json`. Suba os bancos com:

```bash
docker compose up auth-db user-db restaurant-db order-db -d
```

Depois, em cada pasta de serviço:

```bash
npm install
npx prisma migrate dev
npm run start:dev
```

## Roadmap

### MVP (fase 1)
- [ ] Cadastro e login de usuário
- [ ] Listagem de restaurantes
- [ ] Ver cardápio de um restaurante
- [ ] Fazer um pedido
- [ ] Ver status do pedido

### Fase 2
- [ ] Busca por categoria/nome
- [ ] Avaliação de restaurantes
- [ ] Histórico de pedidos
- [ ] Painel do restaurante

### Fase 3
- [ ] Status em tempo real (WebSocket)
- [ ] Notificações por e-mail
- [ ] Upload de imagens
