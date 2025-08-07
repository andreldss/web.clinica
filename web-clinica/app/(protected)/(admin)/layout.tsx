import { ReactNode } from 'react';
import Header from '@/app/components/ui/header';
import { verifyAdmin } from '@/app/lib/verify-admin';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: ReactNode }) {

    const isAdmin = await verifyAdmin()

    if (!isAdmin) {
        return redirect('/home')
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="h-[10vh]">
                <Header />
            </div>
            <main className="flex-1 h-[90vh]">
                {children}
            </main>
        </div>
    );
}
