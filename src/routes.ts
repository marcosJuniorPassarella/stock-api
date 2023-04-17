import { Router } from "express";

/* Controllers */
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

/* USER */
router.post("/user", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);

/* CATEGORY */
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

/* PRODUCT */
router.post("/product", isAuthenticated, new CreateProductController().handle);
export { router };
