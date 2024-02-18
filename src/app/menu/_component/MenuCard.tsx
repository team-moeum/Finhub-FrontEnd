import style from "./MenuCard.module.css";


export default function MenuCard({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className={style.container}>
            <span>{children}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M1 13L7 7L1 1" stroke="#DADBDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}