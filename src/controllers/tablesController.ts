import {  Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";


const Prisma = new PrismaClient();

async function getAllTables(req: Request, res: Response, next: NextFunction){
    try {
        const tables = await Prisma.mesa.findMany();
        res.status(200).json(tables);
    } catch (error) {
        next(error);
    }
}

async function tableRegister(req: Request, res: Response, next: NextFunction){
    try {
        const { nome, capacidade , status } = req.body;

        if(!nome || !capacidade || !status){
            res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const table = await Prisma.mesa.create({
            data : {
                id: Math.floor(Math.random() * 1000),
                nome,
                capacidade,
                status
            }
        });

        res.status(201).json(table);
    } catch (error) {
        next(error); 
    }
}

async function updateTable(req: Request, res: Response, next: NextFunction){
    try {
        const { id } = req.params;
        const { nome, capacidade, status } = req.body;
        const table = await Prisma.mesa.update({
            where : {
                id : Number(id)

            },
            data : {
                nome,
                capacidade,
                status
            }
        });
        res.status(200).json(table);
    } catch (error) {
        next(error);
    }
}

async function deleteTable(req: Request, res: Response, next: NextFunction){
    try {
        const { id } = req.params;
        const table = await Prisma.mesa.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json({ message: 'Mesa deletada com sucesso'});
    } catch (error) {
        next(error);
    }
}

export { getAllTables , tableRegister , updateTable , deleteTable };