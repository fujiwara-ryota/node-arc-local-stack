export interface ExampleRepository {
  put(payload: { id: string; body: string }): Promise<void>;
}
