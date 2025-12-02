import { useRouter } from 'next/navigation';

export const useLogOut = () => {
    const router = useRouter();
    const isLoggedIn = localStorage.getItem('token') !== null;
    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/login');
    };
    return { logOut, isLoggedIn };
}