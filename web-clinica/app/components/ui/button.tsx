import { cn } from "@/app/lib/utils";

export default function Button({
    children,
    variant = "primary",
    ...props
}: {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {


    return (
        <button {...props}
            className={cn(
                "p-3 text-[#124f14] rounded font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70 cursor-pointer focus:outline-none",
                variant === "primary" && "px-4 py-2 bg-[#fffffa] border border-transparent hover:text-content-body active:border-[#97979B]",
                props.className
            )}>
            {children}
        </button>
    )
}