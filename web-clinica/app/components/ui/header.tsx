import { verifyAdmin } from "@/app/lib/verify-admin";
import { verifyRole } from "@/app/lib/verify-role";
import Link from "next/link";

export default async function Header() {

    const isAdmin = await verifyAdmin()
    const isMedico = await verifyRole()

    return (
        <header className="flex justify-end p-4 text-[#124f14] text-xl font-bold">
            <nav className="flex gap-6 mr-10">
                <Link href="/home" className="hover:underline">
                    Home
                </Link>
                {isMedico &&
                    <Link href="/atendimentos" className="hover:underline">
                        Atendimentos
                    </Link>
                }
                {isAdmin &&
                    <Link href="/register" className="hover:underline">
                        Cadastros
                    </Link>
                }
                <Link href="/perfil" className="hover:underline">
                    Perfil
                </Link>
            </nav>
        </header>
    );
}
