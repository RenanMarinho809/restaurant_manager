import { PrismaClient } from "@prisma/client";
import { Handler, Request, Response, NextFunction } from "express";
import { generateToken } from "../middlewares/token";
import * as bcrypt from 'bcrypt';


const Prisma = new PrismaClient();


export class UserController {
    createUser: Handler = (req: Request, res: Response, next: NextFunction) => {

        try {
            const { nome, email, senha } = req.body;
            const user = Prisma.usuario.create({
                data: {
                    id: Math.floor(Math.random() * 1000),
                    nome,
                    email,
                    senha
                }
            });
    
            if (!nome || !email || !senha) {
                res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
            } else {
                res.json(user);
            }
        } catch (error) {
            next(error);
        }
        
    }

    
    loginUser: Handler = async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { email, senha } = req.body;
            const user = await Prisma.usuario.findUnique({where: {email, senha} });

            if (!user){
                res.status(401).json({ message: 'Usuário ou senha incorretos.'});
            }else{
                const token = generateToken(user);
                res.json({ token });
            }
            

        } catch (error) {
           next(error); 
        }
    }
        
}