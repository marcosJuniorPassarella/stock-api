import { Request, Response } from "express";
import { EditProductService } from "../../services/product/EditProductService";
import { EditProductRequest } from "../../models/interfaces/product/EditProductRequest";

class EditProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      price,
      description,
      product_id,
      amount,
      category_id,
    }: EditProductRequest = request.body as unknown as EditProductRequest;
    const editProductService = new EditProductService();

    const productEdited = editProductService.execute({
      name,
      amount,
      description,
      price,
      product_id,
      category_id,
    });
    return response.json(productEdited);
  }
}

export { EditProductController };
