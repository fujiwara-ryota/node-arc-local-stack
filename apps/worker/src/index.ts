import { ExampleUseCase } from "@usecase/ExampleUseCase";
import { ExampleRepositoryImpl } from "@infra/repository/ExampleRepositoryImpl";

const usecase = new ExampleUseCase(new ExampleRepositoryImpl());
console.log("[worker] boot: usecase wired");
