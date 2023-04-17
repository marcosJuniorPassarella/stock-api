import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const product_id = request.query.product_id as string;
    const deleteProductService = new DeleteProductService();

    const productDeleted = await deleteProductService.execute({ product_id });
    return response.json(productDeleted);
  }
}

export { DeleteProductController };
