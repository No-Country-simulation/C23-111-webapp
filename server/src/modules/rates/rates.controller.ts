import { Request, Response } from "express";
import RateModel from "./rates.model";

const createRate = async (req: Request, res: Response): Promise<void> => {
  try {
    const newRate = new RateModel(req.body);
    const createdRate = await newRate.save();
    res.status(201).json(createdRate);
  } catch (error) {    
    // Compureba si el error devuelve es una instancia de Error
    if (error instanceof Error) {
        res.status(400).json({ message: error.message });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
    
  }
}

const deleteRate = async (req: Request, res: Response): Promise<void> => {  
  try {
    
    const deletedRate = await RateModel.findByIdAndDelete(req.params.id);

    if (!deletedRate) {
      res.status(404).json({ message: "Reseña no encontrada" });      
    }

    res.status(200).json(deletedRate);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default {createRate, deleteRate};