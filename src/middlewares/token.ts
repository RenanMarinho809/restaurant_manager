//Gerar token ao fazer login
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.HASHPASSWORD as string;

