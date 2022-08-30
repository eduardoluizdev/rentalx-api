import { InMemoryCarsRepository } from "@modules/cars/repositories/in-memory/InMemoryCarsRepository";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: InMemoryCarsRepository;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new InMemoryCarsRepository();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Fusca",
      description: "Carro de luxo",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 10,
      brand: "Volkswagen",
      category_id: "1",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Fusca",
        description: "Carro de luxo",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 10,
        brand: "Volkswagen",
        category_id: "1",
      });

      await createCarUseCase.execute({
        name: "Fusca 2",
        description: "Carro de luxo",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 10,
        brand: "Volkswagen",
        category_id: "2",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with avaliable try by default", async () => {
    expect(async () => {
      const car = await createCarUseCase.execute({
        name: "Fusca",
        description: "Carro de luxo",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 10,
        brand: "Volkswagen",
        category_id: "1",
      });

      expect(car.available).toBe(true);
    });
  });
});
