import type { ExampleRepository } from "@domain/ifrepository/ExampleRepository";
import { ExampleDomainService } from "@domain/service/ExampleDomainService";

export class ExampleUseCase {
  constructor(private readonly repo: ExampleRepository) {}

  async execute(input: { id: string; body: string }): Promise<{ ok: boolean }> {
    ExampleDomainService.validatePayload(input);
    await this.repo.put(input);
    return { ok: true };
  }
}
