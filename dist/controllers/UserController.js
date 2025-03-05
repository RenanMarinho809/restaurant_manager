"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.loginUser = loginUser;
const client_1 = require("@prisma/client");
const token_1 = __importDefault(require("../middlewares/token"));
const Prisma = new client_1.PrismaClient();
async function createUser(req, res, next) {
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
    }
    catch (error) {
        next(error);
    }
}
async function loginUser(req, res, next) {
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
        const token = await (0, token_1.default)(email, senha);
        res.status(200).json({ token });
    }
    catch (error) {
        next(error);
    }
}
