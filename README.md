# NestJS Product API

A RESTful API built with NestJS, PostgreSQL, and Prisma for managing products.

## 🚀 Technologies

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- TypeScript

## 📋 Pre-requisites

- Node.js
- PostgreSQL
- npm or yarn

## 🛠️ Project Structure

```
src/
├── db/
│   ├── db.module.ts
│   └── prisma.service.ts
├── produto/
│   ├── dto/
│   │   ├── create-produto.dto.ts
│   │   └── update-produto.dto.ts
│   ├── produto.controller.ts
│   ├── produto.module.ts
│   └── produto.service.ts
├── app.module.ts
└── main.ts
```

## 💾 Database Schema

The project uses PostgreSQL with Prisma as the ORM. Here's the database schema:

```prisma
model Produto {
  id        Int      @id @default(autoincrement())
  nome      String
  descricao String
  preco     Float
}
```

## 🔧 Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your database connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/your_database"
PORT=3001
```

4. Run Prisma migrations:

```bash
npx prisma migrate dev
```

5. Start the application:

```bash
npm run start:dev
```

## 🎯 API Endpoints

### Get all products

```http
GET /produtos
```

### Create a product

```http
POST /produtos
Content-Type: application/json

{
    "nome": "Notebook",
    "descricao": "Notebook Dell Inspiron 15 3000",
    "preco": 3500.00
}
```

### Get product by ID

```http
GET /produtos/:id
```

### Update product

```http
PATCH /produtos/:id
Content-Type: application/json

{
    "nome": "Notebook Dell Inspiron 15"
}
```

### Delete product

```http
DELETE /produtos/:id
```

## 🧪 Testing the API

You can test the API using the REST Client extension in VS Code. Create a file named `requests.http` with the following content:

```http
### Get all products
GET http://localhost:3001/produtos

### Create product
POST http://localhost:3001/produtos
content-type: application/json

{
    "nome": "Notebook",
    "descricao": "Notebook Dell Inspiron 15 3000",
    "preco": 3500.00
}

### Update product
PATCH http://localhost:3001/produtos/1
content-type: application/json

{
    "nome": "Notebook Dell Inspiron 15"
}
```

## ⚙️ Configuration

The application uses environment variables for configuration:

- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port (defaults to 3001)

## 🔒 CORS

CORS is enabled by default in the application:

```typescript
const app = await NestFactory.create(AppModule, { cors: true });
```

## 📦 Dependencies

Main dependencies used in the project:

- `@nestjs/common`
- `@nestjs/core`
- `@prisma/client`
- `@nestjs/platform-express`
