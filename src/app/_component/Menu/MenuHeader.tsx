import MenuBackButton from "./MenuBackButton"
import style from "./MenuHeader.module.css"

export default function MenuHeader({children} : {children:React.ReactNode}) {
    return (
        <div className={style.container}>
            <span className={style.back_btn}><MenuBackButton /></span>
            {children}
        </div>
    )
}