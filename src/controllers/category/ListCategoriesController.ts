import { Request, Response } from "express";
import { ListCategoriesService } from "../../services/category/ListCategoriesService";

class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const listCategoryService = new ListCategoriesService();
    const categories = await listCategoryService.execute();
    return response.json(categories);
  }
}
export { ListCategoriesController };
