// app/api/auth/signup/route.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { name, surname, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'Todos los campos son obligatorios.' },
                { status: 400 }
            );
        }

        // Verificar si el email ya está registrado
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'El email ya está registrado.' },
                { status: 400 }
            );
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,

                surname,
            },
        });

        return NextResponse.json(
            {
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    surname: user.surname,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en registro:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor.' },
            { status: 500 }
        );
    }
}
