import Image from 'next/image'
import ImgLogo from '@/public/login-image.png'
import LoginForm from '@/app/components/login/login-form';

export default function Login() {


    return (
        <div className="flex items-center justify-center h-screen gap-5">
            <Image src={ImgLogo} alt='login-photo' />
            <LoginForm />
        </div>
    );
}