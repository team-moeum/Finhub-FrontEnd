import style from "./Nav.module.css";
import FinhubLogo from "../../../../public/Finhub_logo.svg";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

export default function MainNav() {
    return (
        <div className={cx([style.container, style.main])}>
             <Link href="/">
                <Image
                    src={FinhubLogo}
                    alt="FinhubLogo"
                    width={118}
                    height={29}
                />
            </Link>
            <div className={style.right_box}>
                <Link href={`/notify`}>
                    <Image
                        priority
                        alt="notifyIcon"
                        src="/notify.svg"
                        width={36}
                        height={36}
                    />
                </Link>
            </div>
        </div>
    )
}
