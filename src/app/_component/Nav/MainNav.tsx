import style from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";


export default async function MainNav() {
    const session = false;

    return (
        <div className={cx([style.container, style.main])}>
            <Link href="/home">
                <Image
                    src="/finhub_logo_white.svg"
                    alt="FinhubLogo"
                    width={84}
                    height={25}
                />
            </Link>
            <div className={style.right_box}>
                <Link href={session ? `/notify` : `/login`}>
                    <Image
                        priority
                        src="/icons/notify.svg"
                        alt="notify icon"
                        width={21}
                        height={22}
                    />
                </Link>
            </div>
        </div>
    )
}
