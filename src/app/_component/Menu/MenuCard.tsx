import style from "./MenuCard.module.css";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  height?: string | number;
}

export default function MenuCard({href, children, height}: Props) {
    return (
        <Link href={href} className='link_btn'>
            <div className={style.container} style={{height:height}}>
                <span>{children}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 13L7 7L1 1" stroke="#DADBDE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </Link>
    )
}