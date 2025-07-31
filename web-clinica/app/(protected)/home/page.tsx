'use client'
import Button from "@/app/components/ui/button";
import TextInput from "@/app/components/ui/text-input";
import { useState } from "react";
import Image from 'next/image'
import ImgLogo from '@/public/login-image.png'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Calendar from "@/app/components/home/calendar"

export default function Home() {

    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <Calendar />
            </div>
        </div>
    );
}