import { ReactNode } from 'react';
import Header from '@/app/components/ui/header';
import Footer from '@/app/components/ui/footer';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
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
