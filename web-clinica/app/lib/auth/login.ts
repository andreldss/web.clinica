import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import { createConnection } from '../../lib/db'

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_NAME = 'token'

export async function logIn(email: string, password: string) {
  if (!JWT_SECRET) {
    throw new Error('JWT key não foi definida');
  }

  const db = await createConnection()
  const [result]: any[] = await db.execute('SELECT id, senha FROM usuario WHERE email = ?', [email])
  if (result.length === 0) throw new Error('E-mail inválido.')

  const user = result[0]

  const isValid = await bcrypt.compare(password, user.senha)

  if (!isValid) throw new Error('Senha incorreta.')

  const token = jwt.sign({ userId: user.id, email }, JWT_SECRET, { expiresIn: '1h' })

  const cookie = serialize(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60,
  })

  return { token, cookie }
}
