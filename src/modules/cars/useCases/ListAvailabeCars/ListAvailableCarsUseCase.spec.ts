import { InMemoryCarsRepository } from "@modules/cars/repositories/in-memory/InMemoryCarsRepository";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: InMemoryCarsRepository;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new InMemoryCarsRepository();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list avaliable cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca",
      description: "carro antigo",
      daily_rate: 110.0,
      license_plate: "DEF-1213",
      fine_amount: 100,
      brand: "Wolksvagem",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all avaliable cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca2",
      description: "carro antigo",
      daily_rate: 110.0,
      license_plate: "DEF-1213",
      fine_amount: 100,
      brand: "Wolksvagem",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Fusca2",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all avaliable cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca2",
      description: "carro antigo",
      daily_rate: 110.0,
      license_plate: "DEF-1213",
      fine_amount: 100,
      brand: "Wolksvagem",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Wolksvagem",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all avaliable cars by category id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca3",
      description: "carro antigo",
      daily_rate: 110.0,
      license_plate: "DEF-1213",
      fine_amount: 100,
      brand: "Wolksvagem",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
