import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";
import { AuthUserRequest } from "../../models/interfaces/user/AuthUserRequest";

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password }: AuthUserRequest = request.body;
    const authUserService = new AuthUserService();
    const auth = await authUserService.execute({
      email,
      password,
    });

    return response.json(auth);
  }
}

export { AuthUserController };
