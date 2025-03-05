import { PrismaClient } from "@prisma/client";
import {  Request, Response, NextFunction } from "express";
import generateToken from "../middlewares/token";
import { HttpStatuscode } from "../utils/http-server";





const Prisma = new PrismaClient();


async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const { nome, email, senha, role } = req.body;

        
        if (!nome || !email || !senha || !role) {
             res.status(HttpStatuscode.BadRequest).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const user = await Prisma.usuario.create({
            data: {
                id: Math.floor(Math.random() * 1000),
                nome,
                email,
                senha,
                role
            }
        });

        res.status(HttpStatuscode.Created).json(user);

    } catch (error) {
        next(error);
    }
}

async function loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, senha } = req.body;
      const user = await Prisma.usuario.findUnique({
        where: {
          email: email,
          senha: senha,
        },
      });
  
      if (!user) {
         res.status(HttpStatuscode.Unauthorized).json({ message: 'Credenciais inválidas' });
      }
  
      const token = await generateToken(email, senha);
  
      res.status(HttpStatuscode.OK).json({  token });
    } catch (error) {
      next(error);
    }
  }

export {  createUser , loginUser};