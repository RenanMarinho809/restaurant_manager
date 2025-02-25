import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../utils/validation';


dotenv.config();

const password = process.env.HASHPASSWORD;

if (!password) {
    throw new Error('HASHPASSWORD environment variable is not set');
  }
  
export const generateToken = (user: User) => {
    return jwt.sign({ id: user.id, role: user.role }, password, { expiresIn: '1h' });
  };

export const verifyEmail = (token:string) => {
    try {
        return jwt.verify(token, password);
    } catch (error) {
        return null; 
    }
}