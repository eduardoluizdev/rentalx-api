import { AppError } from "../../../../errors/AppError";
import { InMemoryCategoriesRepository } from "../../repositories/in-memory/InMemoryCategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let inMemoryCategoriesRepository: InMemoryCategoriesRepository;

describe("Create category", () => {
  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(
      inMemoryCategoriesRepository
    );
  });

  it("should be able to create a new category", async () => {
    // Arrange
    const category = {
      name: "Test category",
      description: "Test description",
    };

    // Act
    await createCategoryUseCase.execute(category);
    const categorieCreated = await inMemoryCategoriesRepository.findByName(
      category.name
    );

    // Assert
    expect(categorieCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with name exists", async () => {
    // Assert
    expect(async () => {
      // Arrange
      const category = {
        name: "Test category",
        description: "Test description",
      };

      // Act
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
