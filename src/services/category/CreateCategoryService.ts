import prismaClient from "../../prisma/index";

class CreateCategoryService {
  async execute(name: string) {
    if (name === "" || name === null || !name) {
      throw new Error("Invalid name");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return category;
  }
}

export { CreateCategoryService };
