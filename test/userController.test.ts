import { createUser , loginUser } from '../src/controllers/UserController';
import {  Request, Response, NextFunction } from "express";


describe('createUser', () => {
    it('Deve criar um novo usuário', async () => {
        const req: Request = {
            body: {
                nome: 'João',
                email: 'Q5SbG@example.com',
                senha: 'senha123',
                role: 'cliente'
            }
        } as unknown as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue({
                id: 1,
                nome: 'João',
                email: 'Q5SbG@example.com',
                senha: 'senha123',
                role: 'cliente'
            })
        } as unknown as Response;
        const next = jest.fn();
        await createUser(req, res, next)
    })
});

describe('loginUser', () => { 
    it('Deve logar um usuário', async () => {
        const req: Request = {
            body: {
                email: 'Q5SbG@example.com',
                senha: 'senha123'
            }
        } as unknown as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnValue({
                token: 'token123'
            })
        } as unknown as Response;
        const next = jest.fn();
        await loginUser(req, res, next)
    })
});