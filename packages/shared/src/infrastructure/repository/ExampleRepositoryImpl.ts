import { ExampleRepository } from "@domain/ifrepository/ExampleRepository";

export class ExampleRepositoryImpl implements ExampleRepository {
  async put(payload: { id: string; body: string }): Promise<void> {
    console.log("[ExampleRepositoryImpl] put:", payload);
    return;
  }
}
