"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservasList = reservasList;
exports.createreserva = createreserva;
exports.cancelReserva = cancelReserva;
const client_1 = require("@prisma/client");
const Prisma = new client_1.PrismaClient();
async function reservasList(req, res, next) {
    try {
        const reservas = await Prisma.reserva.findMany();
        res.status(200).json(reservas);
    }
    catch (error) {
        next(error);
    }
}
async function createreserva(req, res, next) {
    try {
        const { usuario_id, mesa_id, data_reserva, status } = req.body;
        if (!usuario_id || !mesa_id || !data_reserva || !status) {
            res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }
        const reserva = await Prisma.reserva.create({
            data: {
                id: Math.floor(Math.random() * 1000),
                usuario_id,
                mesa_id,
                data_reserva: new Date("2025-03-04T00:00:00.000Z"),
                status
            }
        });
        res.status(201).json(reserva);
    }
    catch (error) {
        next(error);
    }
}
async function cancelReserva(req, res, next) {
    try {
        const { id } = req.params;
        const reserva = await Prisma.reserva.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({ message: 'Reserva deletada com sucesso' });
    }
    catch (error) {
        next(error);
    }
}
