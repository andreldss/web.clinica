'use client'
import Button from "@/app/components/ui/button";
import TextInput from "@/app/components/ui/text-input";
import { useState } from "react";
import Image from 'next/image'
import ImgLogo from '@/public/login-image.png'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    return (
        <div className="flex items-center justify-center h-screen gap-5">
            <Image src={ImgLogo} alt='login-photo' />
            <div className="bg-gradient-to-br from-green-800 to-emerald-700 text-white p-8 rounded-lg gap-2 flex flex-col w-full max-w-md">
                <span>E-mail</span>
                <TextInput placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span>Senha</span>
                <TextInput placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="flex flex-col gap-2 mt-5 items-center">
                    {error && <p className="text-[#6e0e13] font-bold text-center">{error}</p>}
                    <Button variant="primary" className="w-full">Entrar</Button>
                </div>
            </div>
        </div>
    );
}