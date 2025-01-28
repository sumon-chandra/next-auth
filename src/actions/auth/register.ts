"use server"

import { db } from '@/lib/db';
import { RegisterSchema } from './../../schema/index';
import * as z from "zod"
import bcrypt from "bcrypt"
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values)

    if (!validateFields.success) {
        return { error: "Invalid fields!" }
    }

    const { name, email, password } = validateFields.data

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Add your database logic here to save user data
    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return { error: "The Email already registered!" }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })
    return { success: "Thanks for registering!" }
}