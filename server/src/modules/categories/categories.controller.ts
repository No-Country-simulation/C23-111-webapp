import { Request, Response } from "express";
import CategoryModel from "./categories.model";

const createCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCategory = new CategoryModel(req.body);
    const createdCategory = await newCategory.save();
    res.status(201).json(createdCategory);
  } catch (error) {    
    // Compureba si el error devuelve es una instancia de Error
    if (error instanceof Error) {
        res.status(400).json({ message: error.message });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
    
  }
}

// const deleteRate = async (req: Request, res: Response): Promise<void> => {  
//   try {
    
//     const deletedRate = await CategoryModel.findByIdAndDelete(req.params.id);

//     if (!deletedRate) {
//       res.status(404).json({ message: "Reseña no encontrada" });      
//     }

//     res.status(200).json(deletedRate);
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

// export default {createRate, deleteRate};
export default {createCategory};