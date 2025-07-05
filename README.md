# PERN Stack App

application built with:

- **PostgreSQL** – Relational database
- **Express.js** – Backend REST API
- **React 18** – Frontend UI library
- **Node.js** – Server runtime
- **Vite** – Frontend build tool for React
- **Tailwind CSS** + **ShadCN UI** – UI styling and components
- **Lucide Icons** – Icon system

---

## ⚙️ Requirements

Make sure you have the following versions installed:

| Tool         | Version         |
|--------------|-----------------|
| Yarn         | 4.9.2           |
| Node.js      | ≥ 22.12.0       |
| Nodemon      | 3.1.10          |
| React        | 18              |
| Vite         | 7.0.2           |
| Tailwind CSS | latest          |
| Shadcn/ui    | 2.7.0           |
| Lucide       | 0.525.0         |
| Docker       | 27.3.1          |

---

## 🛠️ Getting Started (Local Development)

### 1. Copy the Environment File

```bash
cp .env.local .env
```

### 2. Setup Prisma
```bash
yarn prisma generate
yarn migrate
yarn seed
```

### 3. Start Dev Servers
```bash
yarn dev
```
## 🐳 Docker Support (PostgreSQL Only)
```bash
yarn database
```

## 🔒 Test Account (Supabase Auth)
**🟢 Deployed Link:** [https://mern-test-six.vercel.app/](https://mern-test-six.vercel.app/)
**📧 Email:** `testuser@jymarkb.cloud`  
**🔑 Password:** `@12345678`
