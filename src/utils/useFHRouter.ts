import { useRouter } from 'next/navigation';

export const useFHRouter = () => {
    const router = useRouter();
    const push = (path: string) => {
        setTimeout(() => {
            router.push(path);
        }, 200);
    }

    return {
        push,
    }
}