import { Router } from "express";

/* Controllers */
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateProductController } from "./controllers/product/CreateProductController";

const router = Router();

router.post("/user", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);

router.post("/product", isAuthenticated, new CreateProductController().handle);
export { router };
