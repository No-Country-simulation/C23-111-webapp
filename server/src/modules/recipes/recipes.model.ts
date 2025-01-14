import mongoose, { Schema, model, Document } from "mongoose";

export interface IRecipeSchema extends Document {
  name: string;
  description: string;
  category: string[];
  ingredients: string[];
  steps: string[];
  image: string;
  createdAt: Date;
  rateAverage: number;
  userId: mongoose.Types.ObjectId;
}

export const RecipeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: [String], required: true },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  rateAverage: { type: Number, default: 0, min: 0, max: 5 },
  userId: { type: String }
});

const RecipeModel = model("Recipe", RecipeSchema);

export default RecipeModel;
