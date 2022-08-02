import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { InMemoryUsersRepository } from "@modules/accounts/repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new InMemoryUsersRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    // Arrange
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "user@test.com",
      name: "User Test",
      password: "123456",
    };
    // Act
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    // Assert
    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent user", async () => {
    // Assert
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("it should not be able to authenticate with incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "000123",
        email: "user@test.com",
        name: "User Test",
        password: "123456",
      };

      // Act
      await createUserUseCase.execute(user);

      // Assert
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorrectPassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
