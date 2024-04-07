import Link from "next/link";
import style from "./UiComponent.module.css";

type Props = {
    href: string
    children: React.ReactNode
}

export default function LinkButton({href, children}:Props) {
    return (
        <Link className={style.link_btn} href={href}>{children}</Link>
    )
}