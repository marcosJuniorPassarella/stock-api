import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { CreateProductRequest } from "../../models/interfaces/product/CreateProductRequest";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      price,
      description,
      category_id,
      amount,
    }: CreateProductRequest = request.body;
    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      price,
      description,
      category_id,
      amount,
    });

    return response.json(product);
  }
}

export { CreateProductController };
