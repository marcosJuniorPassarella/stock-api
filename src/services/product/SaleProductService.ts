import prismaClient from "../../prisma/index";
import { SaleProductRequest } from "../../models/interfaces/product/SaleProductRequest";

class SaleProductService {
  async execute({ product_id, amount }: SaleProductRequest) {
    if (!product_id || !amount) {
      throw new Error("Dados de entrada não foram passados corretamente!");
    }

    const queryProduct = await prismaClient.product.findFirst({
      where: {
        id: product_id,
      },
    });

    if (queryProduct?.amount >= amount && amount > 0) {
      const newAmount = queryProduct?.amount - amount;
      const saveSale = await prismaClient.product.update({
        where: {
          id: product_id,
        },
        data: {
          amount: newAmount,
        },
        select: {
          id: true,
          name: true,
          amount: true,
        },
      });
      return saveSale;
    } else {
      throw new Error("Não foi possível efetuar a venda!");
    }
  }
}

export { SaleProductService };
