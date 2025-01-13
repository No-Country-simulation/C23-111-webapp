import { Schema, model } from "mongoose";

export const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const RecipeModel = model("Recipe", RecipeSchema);

export default RecipeModel;
