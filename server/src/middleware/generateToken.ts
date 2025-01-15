import { sign } from "jsonwebtoken";
import { User } from "../modules/users/users.model";

export const generateToken = (body: Partial<User>, secret: string) => {
  return sign(body , secret, { expiresIn: '1h' })
}