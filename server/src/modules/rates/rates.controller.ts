import { Request, Response } from "express";
import RateModel from "./rates.model";

const createRate = async (req: Request, res: Response): Promise<void> => {
  try {
    const newRate = new RateModel(req.body);
    const cretedRate = await newRate.save();
    res.status(201).json(cretedRate);
  } catch (error) {    
    // Compureba si el error devuelve es una instancia de Error
    if (error instanceof Error) {
        res.status(400).json({ message: error.message });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
    
  }
}

export default {createRate};