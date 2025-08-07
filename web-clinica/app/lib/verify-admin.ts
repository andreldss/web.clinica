import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { query } from '@/app/lib/db'

export async function verifyAdmin(): Promise<boolean> {
    const cookie = await cookies()
    const tokenCookie = cookie.get('token')

    if (!tokenCookie) {
        return false
    }

    const token = tokenCookie.value

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number, consultorioId: number }

        const [response] = await query('SELECT admin FROM usuario WHERE id = ? and consultorio_id = ?', [payload.userId, payload.consultorioId])

        return response?.admin === 1
    } catch (err) {
        console.error('Erro ao verificar admin:', err)
        return false
    }
}