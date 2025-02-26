//Gerar token ao fazer login
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const secret = 'secret_key_jwt';

export const generateToken = async (user: any) => {
    const token = jwt.sign({ user }, secret, {
        expiresIn: '1h'
    })
    return token;
}

export const verifyToken = async(token: string) => {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (error) {
        return null;
    }
}

exports = { generateToken, verifyToken}