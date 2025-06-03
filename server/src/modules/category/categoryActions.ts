import type { RequestHandler } from "express";
import CategoryRepository from "./categoryRepository";

type CatType = {
  id: number;
  name: string;
};

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

const browse: RequestHandler = async (req, res) => {
  const categoryFromDB = await CategoryRepository.readAll();
  res.json(categoryFromDB);
};

const read: RequestHandler = (req, res) => {
  const { id } = req.params;
  const parsedId = Number(id);
  const categoryById = categories.find((c) => c.id === parsedId);

  if (categoryById) {
    res.json(categoryById);
    return;
  }
  res.status(404).json({ message: "Category not found" });
};

export default { browse, read };
