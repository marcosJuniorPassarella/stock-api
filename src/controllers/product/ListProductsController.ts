import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductsService";

class ListProductsController {
  async handle(request: Request, response: Response) {
    const listProductsService = new ListProductService();
    const products = await listProductsService.execute();

    return response.json(products);
  }
}

export { ListProductsController };
