import { getAllTables , tableRegister , updateTable, deleteTable } from '../src/controllers/tablesController';
import {  Request, Response, NextFunction } from "express";


describe('getAllTables', () => {
    it('Deve retornar uma lista de mesas', async () => {
        const req: Request = {} as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue([{
                id: 1,
                nome: 'Mesa 1',
                capacidade: 4,
                status: 'livre'
            }])
        } as unknown as Response;
        const next = jest.fn();
        const mesas = await getAllTables(req, res, next)
    })
})

describe('tableRegister', () => {
    it('Deve criar uma nova mesa', async () => {
        const req: Request = {
            body: {
                nome: 'Mesa 1',
                capacidade: 4,
                status: 'livre'
            }
        } as unknown as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue({
                id: 1,
                nome: 'Mesa 1',
                capacidade: 4,
                status: 'livre'
            })
        } as unknown as Response;
        const next = jest.fn();
        const mesas = await tableRegister(req, res, next)
    })
})

describe('updateTable', () => {
    it('Deve atualizar uma mesa', async () => {
        const req: Request = {
            params: {
                id: 1
            },
            body: {
                nome: 'Mesa 1',
                capacidade: 4,
                status: 'livre'
            }
        } as unknown as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue({
                id: 1,
                nome: 'Mesa 1',
                capacidade: 4,
                status: 'livre'
            })
        } as unknown as Response;
        const next = jest.fn();
        const mesas = await updateTable(req, res, next)
    })
})

describe('deleteTable', () => {
    it('Deve deletar uma mesa', async () => {
        const req: Request = {
            params: {
                id: 1
            }
        } as unknown as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue({
                id: 1,
                nome: 'Mesa 1',
                capacidade: 4,
                status: 'livre'
            })
        } as unknown as Response;
        const next = jest.fn();
        const mesas = await deleteTable(req, res, next)
    })
})