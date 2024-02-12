import style from "./Nav.module.css";
import BackButton from "./BackButton";

export default function SearchNav() {
    return (
        <div className={style.container}>
            <BackButton />
        </div>
    )
}
