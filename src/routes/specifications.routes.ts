import { Request, Response, Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecification";

const specificationsRouter = Router();

specificationsRouter.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRouter.get("/", (request: Request, response: Response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationsRouter };
