import Fastify from "fastify";
import { ExampleUseCase } from "@usecase/ExampleUseCase";
import { ExampleRepositoryImpl } from "@infra/repository/ExampleRepositoryImpl";

const app = Fastify({ logger: true });
const usecase = new ExampleUseCase(new ExampleRepositoryImpl());

app.get("/health", async () => ({ ok: true }));

app.post<{
  Body: { id: string; body: string };
}>("/example", async (req, reply) => {
  const res = await usecase.execute(req.body);
  return reply.send(res);
});

app.listen({ port: 3000, host: "0.0.0.0" });
