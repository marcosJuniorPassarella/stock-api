import { Router } from "express";

/* Controllers */
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

router.post("/user", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);


export { router };
