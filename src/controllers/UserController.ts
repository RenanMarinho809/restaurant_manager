import { PrismaClient } from "@prisma/client";
import { Handler, Request, Response, NextFunction } from "express";

const Prisma = new PrismaClient();


export class UserController {
    createUser: Handler = (req: Request, res: Response, next: NextFunction) => {
        try {
           const { nome , email, senha } = req.body;
           const user = Prisma.usuario.create({
            data: {
                nome,
                email,
                senha
            }
           });
              res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    userLogin: Handler = (req: Request, res: Response, next: NextFunction) => {
        try {
           const { email, senha } = req.body;
              const user = Prisma.usuario.findFirst({
                where: {
                    email,
                    senha
                }
              });
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
}
