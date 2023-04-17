import { CreateProductRequest } from "../../models/interfaces/product/CreateProductRequest";
import prismaClient from "../../prisma";

class CreateProductService {
  async execute({
    name,
    price,
    description,
    category_id,
    amount,
  }: CreateProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        category_id: category_id,
        amount: +amount,
      },
    });
    return product;
  }
}

export { CreateProductService };
