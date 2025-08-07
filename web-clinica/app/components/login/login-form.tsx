'use client'

import { useState } from "react";
import Button from "../ui/button"
import TextInput from "../ui/text-input"
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        if (!email || !password) {
            setError('Preencha todos os campos para logar!')
            return
        }

        try {
            await axios.post('/api/login', { email, password }, { withCredentials: true })
            setLoading(false)
            router.push('/home')
        } catch (err: any) {
            setError(err.response?.data?.message || 'Erro de conexão')
        }
    }
    return (
        <form onSubmit={handleLogin} className="bg-gradient-to-br from-green-800 to-emerald-700 text-white p-8 rounded-lg gap-2 flex flex-col w-full max-w-md">
            <span>E-mail</span>
            <TextInput placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <span>Senha</span>
            <TextInput placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="flex flex-col gap-2 mt-5 items-center">
                {error && <p className="text-[#6e0e13] font-bold text-center">{error}</p>}
                <Button variant="primary" className="flex w-full justify-center" type="submit" >{loading ? <div className="w-6 h-6 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin"></div> : 'Entrar'}</Button>
            </div>
        </form>
    )
}