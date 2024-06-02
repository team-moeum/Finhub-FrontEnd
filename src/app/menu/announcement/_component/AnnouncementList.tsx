'use client';

import style from './AnnouncementList.module.css';
import Image from 'next/image';
import { useEffect, useMemo } from 'react';

import Loading from '@/app/loading';
import { Announce } from '@/model/Announce';
import { dateFormatter } from '@/utils/formatter';
import { useAnnounceInfiniteQuery } from '@/states/server/queries';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const AnnouncementList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching
  } = useAnnounceInfiniteQuery({size: 7});

  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const announceList: Announce[] = useMemo(() => (data ? data.pages.flatMap((data) => (data)) : []), [data]);

  useEffect(() => {
    if (isIntersecting && hasNextPage) fetchNextPage();
  }, [isIntersecting, hasNextPage])

  if (isFetching && announceList.length < 1) return <Loading />
  return (
    <div className={style.container}>
      {announceList.length > 0 ?
        <div className={style.list}>
          {announceList.map(item => (
            <div className={style.item} key={item.id}>
              <p className={style.content}>{item.content}</p>
              <p className={style.time}>{dateFormatter(item.time, 'dotSeparated')}</p>
            </div>
          ))}
          <div ref={ref} style={{ width: '100%', height: '20px' }}></div>
        </div>
        :
        <div className={style.no_data}>
          <p>아직 공지할 사항이 없습니다!</p>
          <Image
            src='/images/popular_search_not_found.png'
            alt='no data image'
            width={170}
            height={160}
          />
        </div>
      }
    </div>
  )
}