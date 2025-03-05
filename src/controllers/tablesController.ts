import {  Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { HttpStatuscode } from "../utils/http-server";


const Prisma = new PrismaClient();

async function getAllTables(req: Request, res: Response, next: NextFunction){
    try {
        const tables = await Prisma.mesa.findMany();
        res.status(HttpStatuscode.OK).json(tables);
    } catch (error) {
        next(error);
    }
}

async function tableRegister(req: Request, res: Response, next: NextFunction){
    try {
        const { nome, capacidade , status } = req.body;

        if(!nome || !capacidade || !status){
            res.status(HttpStatuscode.BadRequest).json({ error: 'Todos os campos são obrigatórios.' });
        }

        const table = await Prisma.mesa.create({
            data : {
                id: Math.floor(Math.random() * 1000),
                nome,
                capacidade,
                status
            }
        });

        res.status(HttpStatuscode.Created).json(table);
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
        res.status(HttpStatuscode.OK).json(table);
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
        res.status(HttpStatuscode.OK).json({ message: 'Mesa deletada com sucesso'});
    } catch (error) {
        next(error);
    }
}

export { getAllTables , tableRegister , updateTable , deleteTable };