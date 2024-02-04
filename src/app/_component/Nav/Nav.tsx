import Link from 'next/link';
import Image from 'next/image';
import style from "./Nav.module.css";

export const Nav = () => {
    
    return (
        <div className={style.container}>
            <ul>
                <li>
                    <Link href={`/notify`}>
                        <Image
                            priority
                            alt="notifyIcon"
                            src="/notify.svg"
                            width={36}
                            height={36}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
};