import type { RequestHandler } from "express";

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
  res.json(categories);
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
