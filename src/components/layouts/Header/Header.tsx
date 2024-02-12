import Link from "next/link";
import Image from "next/image";
import style from "./Header.module.css"
import FinhubLogo from "../../../../public/FinHub.svg";


export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link href="/">
          <Image
            src={FinhubLogo}
            alt="FinhubLogo"
            width={80}
            height={30}
          />
        </Link>
      </div>
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
