"use client"

import style from "./CategoryItemList.module.css";
import cx from 'classnames';

export default function CategoryItemList() {
    return (
        <div className={style.container}>
            <div className={cx([style.item, style.active])}>
                <div className={style.icon_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                </div>
                <p>주식</p>
            </div>
            <div className={style.item}>
                <div className={style.icon_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                </div>
                <p>주식</p>
            </div>
            <div className={style.item}>
                <div className={style.icon_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                </div>
                <p>주식</p>
            </div>
            <div className={style.item}>
                <div className={style.icon_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                </div>
                <p>주식</p>
            </div>
            <div className={style.item}>
                <div className={style.icon_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                </div>
                <p>주식</p>
            </div>
            <div className={style.item}>
                <div className={style.icon_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g stroke="current" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M11.298 14.419a1.945 1.945 0 0 1-1.945-1.946 1.945 1.945 0 0 1 1.945-1.967h2.198M11.299 14.418h.989a1.945 1.945 0 0 1 0 3.891h-2.253M11.771 9.264v1.264M11.771 18.298v1.264"/><path d="M21.815 10.507c.483 1.24.73 2.56.726 3.89a10.77 10.77 0 1 1-10.77-10.77h6.01"/><path d="m15.167 6.286 2.638-2.637L15.167 1"/></g></svg>
                </div>
                <p>주식</p>
            </div>
        </div>
    )
}