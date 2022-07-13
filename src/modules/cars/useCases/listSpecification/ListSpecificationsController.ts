import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(
    private listSpecificationsController: ListSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationsController.execute();

    return response.json(specifications);
  }
}

export { ListSpecificationsController };
