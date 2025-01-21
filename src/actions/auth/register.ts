"use server"

import { db } from '@/lib/db';
import { RegisterSchema } from './../../schema/index';
import * as z from "zod"
import bcrypt from "bcrypt"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values)

    if (!validateFields.success) {
        return { error: "Invalid fields!" }
    }

    const { name, email, password } = validateFields.data
    // Add your database logic here to save user data
    const existingUser = await db.user.findUnique({
        where: { email },
    })

    if (existingUser) {
        return { error: "Email already registered!" }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })
    return { success: "Thanks for registering!" }
}