import { Schema, model } from "mongoose";

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: [String], required: true },
  ingredientes: { type: [String], required: true },
  steps: { type: [String], required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  rateId: { type: String},
  userId: { type: String}
}); 

const RecipeModel = model("Recipe", RecipeSchema);

export default RecipeModel;
