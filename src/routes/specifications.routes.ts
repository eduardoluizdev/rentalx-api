import { Request, Response, Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecification";

const specificationsRouter = Router();
const createSpecificationController = new CreateSpecificationController();

specificationsRouter.post("/", createSpecificationController.handle);

specificationsRouter.get("/", (request: Request, response: Response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationsRouter };
