import { ValidationError } from "@domain/praerr/AppError";

export class ExampleDomainService {
  static validatePayload(payload: { id: string; body: string }): void {
    if (!payload.id || payload.id.trim() === "") {
      throw new ValidationError("ID is required");
    }
    if (!payload.body || payload.body.trim() === "") {
      throw new ValidationError("Body is required");
    }
    if (payload.body.length > 1000) {
      throw new ValidationError("Body must be less than 1000 characters");
    }
  }
}
