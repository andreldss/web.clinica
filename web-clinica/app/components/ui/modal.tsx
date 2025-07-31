import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: ReactNode }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer">
                    ✕
                </button>
                {children}
            </div>
        </div>
    )
}