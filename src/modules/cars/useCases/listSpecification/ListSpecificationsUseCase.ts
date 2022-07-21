import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private categoriesRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specifications = this.categoriesRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
