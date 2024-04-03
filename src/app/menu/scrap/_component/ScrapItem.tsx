import { Topic } from "@/model/Topic";
import Link from "next/link";
import style from "./ScrapItem.module.css";
import ScrapIcon from "@/assets/Icons";


export function ScrapItem({data}: {data: Topic}) {

    const handleScrapClick = () => {
        console.log("scrap 해제");
    }

    return (
      <Link href={`/${data.categoryId}/${data.id}`}>
          <div className={style.item_container}>
              <div className={style.img_box}></div>
              <div className={style.content_box}>
                  <p>{data.title}</p>
                  <p>{data.content}</p>
              </div>
              <div className={style.icon_box} onClick={handleScrapClick}>
                  <ScrapIcon active={true} />
              </div>
          </div>
      </Link>
    )
}