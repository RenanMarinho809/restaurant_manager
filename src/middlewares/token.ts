//Gerar token ao fazer login
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/validation';

dotenv.config();

const secret = process.env.HASHPASSWORD as string;

export const generateToken = (user: User) => {
    const token = jwt.sign({ user: user.email , role: user.role}, secret, {
        expiresIn: '1h'
    })
}

export const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (error) {
        return null;
    }
}