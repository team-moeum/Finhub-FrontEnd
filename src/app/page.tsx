import Link from "next/link";
import style from "./page.module.css";
import CategoryCard from "./_component/Catergory/CategoryCard";
import MainNav from "./_component/Nav/MainNav";
import HomeContent from "./_component/Catergory/HomeContent";
import { AddTopicItem } from "./_component/Catergory/TopicList";


export default function Home() {
  return (
    <>
      <MainNav />
      <div className={style.container}>
        <Link href="/search" className={style.inputLinkBox}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z" fill="#50BF50"/>
          </svg>
          <span>찾고 싶은 단어를 입력해주세요.</span>
        </Link>
        <div className={style.category_container}>
          <CategoryCard />
          <HomeContent />
          <AddTopicItem />
        </div>
      </div>
    </>
  );
}
