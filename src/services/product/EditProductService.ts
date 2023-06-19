import { EditProductRequest } from "../../models/interfaces/product/EditProductRequest";
import prismaClient from "../../prisma";

class EditProductService {
  async execute({
    name,
    amount,
    description,
    price,
    product_id,
    category_id,
  }: EditProductRequest) {
    const productExists = await prismaClient.product.findFirst({
      where: {
        id: product_id,
      },
    });

    if (!productExists) {
      throw new Error("Esse produto não existe!");
    }

    const productEdited = await prismaClient.product.update({
      where: {
        id: product_id,
      },
      data: {
        name: name,
        amount: +amount,
        description: description,
        price: price,
        category_id: category_id
      },
    });
    return productEdited;
  }
}

export { EditProductService };
