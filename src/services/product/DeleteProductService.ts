import prismaClient from "../../prisma";

interface DeleteProductRequest {
  product_id: string;
}

class DeleteProductService {
  async execute({ product_id }: DeleteProductRequest) {
    if (!product_id) {
      throw new Error("Id do produto não foi enviado!");
    }

    const deleteProduct = await prismaClient.product.delete({
      where: {
        id: product_id,
      },
    });
    return deleteProduct;
  }
}

export { DeleteProductService };
