import { PrismaClient } from "@prisma/client";
import {  Request, Response, NextFunction } from "express";
import generateToken from "../middlewares/token";





const Prisma = new PrismaClient();


async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const { nome, email, senha, role } = req.body;

        
        if (!nome || !email || !senha || !role) {
             res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
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

        res.status(201).json(user);

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
         res.status(401).json({ message: 'Credenciais inválidas' });
      }
  
      const token = await generateToken(email, senha);
  
      res.status(200).json({  token });
    } catch (error) {
      next(error);
    }
  }

export {  createUser , loginUser};