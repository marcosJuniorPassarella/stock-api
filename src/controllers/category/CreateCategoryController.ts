import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, respoonse: Response) {
    const { name } = request.body;
    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(name as string);
    return respoonse.json(category);
  }
}

export { CreateCategoryController };
