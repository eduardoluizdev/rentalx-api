import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "@modules/cars/useCases/listCategory/ListCategoryController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

const uploadCategories = multer(uploadConfig.upload("./tmp"));

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoryController();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  uploadCategories.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
