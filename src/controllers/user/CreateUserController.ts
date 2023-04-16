import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { CreateUserRequest } from "../../models/interfaces/user/CreateUserRequest";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password }: CreateUserRequest = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ name, email, password });
    return response.json(user);
  }
}

export { CreateUserController };
