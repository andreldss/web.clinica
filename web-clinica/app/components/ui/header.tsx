import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-end p-4 text-[#124f14] text-xl font-bold">
            <nav className="flex gap-6">
                <Link href="/home" className="hover:underline">
                    Home
                </Link>
                <Link href="/atendimentos" className="hover:underline">
                    Atendimentos
                </Link>
                <Link href="/register" className="hover:underline">
                    Cadastros
                </Link>
                <Link href="/perfil" className="hover:underline">
                    Perfil
                </Link>
            </nav>
        </header>
    );
}
