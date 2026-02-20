import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello from Elysia!")
  .get("/hello/:name", ({ params: { name } }) => `Hello, ${name}!`)
  .post("/api/data", ({ body }) => {
    return { message: "Data received", data: body };
  })
  .listen(3000);

console.log(
  `🦊 Server running at http://${app.server?.hostname}:${app.server?.port}`
);
