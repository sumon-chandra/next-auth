import { db } from "@/lib/db";
import { User } from "@prisma/client"

export const getUserByEmail = async (email: string): Promise<User | null> => {
    const user = await db.user.findUnique({ where: { email } })
    return user;
}

export const getUserByID = async (id: string): Promise<User | null> => {
    const user = await db.user.findUnique({ where: { id } })
    return user;
}
