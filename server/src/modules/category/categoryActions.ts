import type { RequestHandler } from "express";

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

const browse: RequestHandler = (req, res) => {
  const { cat = "" } = req.query as Record<string, string>;

  const filteredCategory = categories.filter((c) =>
    c.name.trim().toLowerCase().includes(cat.trim().toLowerCase()),
  );
  res.json(filteredCategory);
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
