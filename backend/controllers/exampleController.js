import Example from "../models/example.js";

export const getExamples = async (req, res) => {
  const items = await Example.find();
  res.json(items);
};

export const createExample = async (req, res) => {
  const newItem = await Example.create({ text: req.body.text });
  res.json(newItem);
};