import prismaClient from "../../prisma/index";

class ListProductService {
  async execute() {
    const products = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        amount: true,
        description: true,
        price: true,
        category: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return products;
  }
}

export { ListProductService };
