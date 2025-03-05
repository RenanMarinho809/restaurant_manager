"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTables = getAllTables;
exports.tableRegister = tableRegister;
exports.updateTable = updateTable;
exports.deleteTable = deleteTable;
const client_1 = require("@prisma/client");
const Prisma = new client_1.PrismaClient();
async function getAllTables(req, res, next) {
    try {
        const tables = await Prisma.mesa.findMany();
        res.status(200).json(tables);
    }
    catch (error) {
        next(error);
    }
}
async function tableRegister(req, res, next) {
    try {
        const { nome, capacidade, status } = req.body;
        if (!nome || !capacidade || !status) {
            res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }
        const table = await Prisma.mesa.create({
            data: {
                id: Math.floor(Math.random() * 1000),
                nome,
                capacidade,
                status
            }
        });
        res.status(201).json(table);
    }
    catch (error) {
        next(error);
    }
}
async function updateTable(req, res, next) {
    try {
        const { id } = req.params;
        const { nome, capacidade, status } = req.body;
        const table = await Prisma.mesa.update({
            where: {
                id: Number(id)
            },
            data: {
                nome,
                capacidade,
                status
            }
        });
        res.status(200).json(table);
    }
    catch (error) {
        next(error);
    }
}
async function deleteTable(req, res, next) {
    try {
        const { id } = req.params;
        const table = await Prisma.mesa.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({ message: 'Mesa deletada com sucesso' });
    }
    catch (error) {
        next(error);
    }
}
