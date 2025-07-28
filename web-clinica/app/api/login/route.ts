import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { logIn } from '../../lib/auth/login' 

export async function POST(request: NextRequest) {

  const { email, password } = await request.json()

  try {

    const { cookie } = await logIn(email, password)

    const res = NextResponse.json({ message: 'Logado com sucesso!' })
    res.headers.set('Set-Cookie', cookie)
    return res

  } catch (err: any) {

    return NextResponse.json({ message: err.message }, { status: 401 })
  }
}
