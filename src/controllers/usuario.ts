import { PrismaClient } from "@prisma/client";
import { Request, Response , NextFunction } from "express";

const Prisma = new PrismaClient();


module.exports = {
    createUser: async (req: Request , res: Response, next: NextFunction) => {
        try {
            const { nome , email , senha , role } = req.body;
            const user = await Prisma.usuario.create({
                data : {
                    nome,
                    email,
                    senha,
                    role
                }
            })
        } catch (error) {
            next(error);
        }
    }
}