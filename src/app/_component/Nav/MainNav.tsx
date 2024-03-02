import style from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

export default function MainNav() {
    return (
        <div className={cx([style.container, style.main])}>
            <Link href="/">
                <Image
                    src="/finhub_logo.svg"
                    alt="FinhubLogo"
                    width={118}
                    height={29}
                />
            </Link>
            <div className={style.right_box}>
                <Link href={`/notify`}>
                    <Image
                        priority
                        src="/icons/notify.svg"
                        alt="notify icon"
                        width={36}
                        height={36}
                    />
                </Link>
            </div>
        </div>
    )
}
