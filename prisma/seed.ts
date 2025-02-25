import { PrismaClient } from '@prisma/client';
import * as bycrpt from 'bcrypt';

const prisma = new PrismaClient();

async function seed () {
    const hashedPassword = await bycrpt.hash('password', 10);

    await prisma.usuario.create({
        data: {
            nome: 'Admin',
            email : 'admin@example.com',
            senha : hashedPassword,
            role: 'administrador',
        }
    });

    await prisma.mesa.createMany({
      data: [
        { nome: "Mesa 1", capacidade: 4 },
        { nome: "Mesa 2", capacidade: 6 },
        { nome: "Mesa 3", capacidade: 2 },
      ],
    });
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });