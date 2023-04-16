import { Router } from "express";

/* Controllers */
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.post("/user", new CreateUserController().handle);

export { router };
