import {  Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { HttpStatuscode } from "../utils/http-server";

const Prisma = new PrismaClient();

async function reservasList(req: Request, res: Response, next: NextFunction){
    try {
        const reservas = await Prisma.reserva.findMany();
        res.status(HttpStatuscode.OK).json(reservas);
    } catch (error) {
        next(error);
    }
}

async function createreserva(req: Request, res: Response, next: NextFunction) {


     try {
        const { usuario_id, mesa_id , data_reserva, status } = req.body;

        if(!usuario_id || !mesa_id || !data_reserva || !status){
                res.status(HttpStatuscode.BadRequest).json({ message: 'Todos os campos são obrigatórios.'});
        }

        const reserva = await Prisma.reserva.create({
            data: {
                id: Math.floor(Math.random() * 1000),
                usuario_id,
                mesa_id,
                data_reserva : new Date("2025-03-04T00:00:00.000Z"),
                status
            }
        });
        res.status(HttpStatuscode.Created).json(reserva);
     } catch (error) {
        next(error);
     }
}

async function cancelReserva(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        const reserva = await Prisma.reserva.delete({
            where: {
                id: Number(id)
            }
        });
        
        res.status(HttpStatuscode.OK).json({ message: 'Reserva deletada com sucesso' });
    } catch (error) {
        next(error);
    }
}

export { reservasList , createreserva, cancelReserva};
