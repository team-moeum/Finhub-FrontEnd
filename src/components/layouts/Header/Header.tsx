import Link from "next/link";
import Image from "next/image";
import { Nav } from "../../../app/_component/Nav/Nav";
import style from "./Header.module.css"
import FinhubLogo from "../../../../public/Finhub.svg";


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
      <Nav />
    </div>
  );
};
