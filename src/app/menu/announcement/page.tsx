import style from './announcemnet.module.css';

import MenuHeader from '@/app/_component/Menu/MenuHeader';
import { AnnouncementList } from './_component/AnnouncementList';

export default async function AnnouncementPage() {
  return (
    <div className={style.container}>
      <MenuHeader>공지사항</MenuHeader>
      <AnnouncementList />
    </div>
  )
}