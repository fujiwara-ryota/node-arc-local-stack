export interface CLIRunner {
  run(args: string[]): Promise<void>;
}

export class DefaultCLIRunner implements CLIRunner {
  async run(args: string[]): Promise<void> {
    console.log("[CLIRunner] Running with args:", args);
  }
}
