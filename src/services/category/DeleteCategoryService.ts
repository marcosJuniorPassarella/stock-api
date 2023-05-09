import prismaClient from "../../prisma/index";

class DeleteCategoryService {
  async execute(category_id: string) {
    if (category_id) {
      const categories = await prismaClient.category.findFirst({
        where: {
          id: category_id,
        },
      });

      if (categories) {
        const category = await prismaClient.category.delete({
          where: {
            id: category_id,
          },
        });
        return category;
      }
    }
  }
}

export { DeleteCategoryService };
