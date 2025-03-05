import { reservasList , createreserva , cancelReserva } from '../src/controllers/reservasController'
import { Request, Response, NextFunction } from 'express'


describe('reservasList', () => {
    it('Deve retornar uma lista de reservas', async () => {
        const req = {
            get: jest.fn(),
            header: jest.fn(),
            accepts: jest.fn(),
            acceptsCharsets: jest.fn(),
            // add other required properties here
        } as unknown as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue([{
                id: 1,
                usuario_id: 1,
                mesa_id: 1,
                data_reserva: new Date("2025-03-04T00:00:00.000Z"),
                status: "confirmed"
            }])
        } as unknown as Response;
        const next = jest.fn();
        const reservas = await reservasList(req, res, next)
    })
})

describe('createreserva', () => {
    it('Deve criar uma nova reserva', async () => {
        const req = {
            body: {
                usuario_id: 1,
                mesa_id: 1,
                data_reserva: new Date("2025-03-04T00:00:00.000Z"),
                status: "confirmed"
            }
        } as unknown as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue({
                id: 1,
                usuario_id: 1,
                mesa_id: 1,
                data_reserva: new Date("2025-03-04T00:00:00.000Z"),
                status: "confirmed"
            })
        } as unknown as Response;
        const next = jest.fn();
        const reserva = await createreserva(req, res, next)
    })
})

describe('cancelReserva', () => {
    it('Deve cancelar uma reserva', async () => {
        const req = {
            params: {
                id: 1
            }
        } as unknown as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue({
                message: "Reserva deletada com sucesso"
            })
        } as unknown as Response;
        const next = jest.fn();
        const reserva = await cancelReserva(req, res, next)
    });
})