## To-Do

### **Objective**

Build a **Todo List App Backend** where users can:

- Add tasks.
- Edit tasks.
- Mark tasks as Completed/Not Completed.
- Delete tasks.

---

### **Technical Requirements**

1. **Back-End**: Use **Express.js**.
    - REST API Endpoints:
        - `GET /tasks`
        - `POST /tasks`
        - `PUT /tasks/:id`
        - `DELETE /tasks/:id`
2. **Database**: Use **Prisma** with **MySQL**.
    - Tasks should include: `id`, `title`, `color`, `completed` status, and timestamps.


# Getting started with env setup

First, clone this respository:


```bash
git clone https://github.com/iaamar/to-do-backend.git
```

Second, go to https://console.prisma.io/ and create postgresql database. Paste the unique database URL and paste in .env file in root dir of this project.

The whole env file will have following contents:

```bash
NODE_ENV=development
PORT=3001
DATABASE_URL=""
```

Third, connect application to database:

```bash
npx prisma migrate dev --name init
```

Once database is connect and schema is migrated proceed to next step.

Forth, Install node modules

```bash
npm install
```

Fifth, run the server:

```bash
npm run dev
```

On [http://localhost:3001](http://localhost:3000) backend server will be running.
