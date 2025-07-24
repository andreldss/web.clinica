import { cn } from "@/app/lib/utils";

export default function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className={cn(`
           w-full p-3 bg-[#fffffa] text-[#124f14] placeholder:text-[#124f14] rounded-xl
           border border-transparent hover:text-content-body active:border-[#97979B] focus:outline-none`,
            props.className
        )} />
    )
}