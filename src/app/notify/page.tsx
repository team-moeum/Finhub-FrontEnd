import BackButton from '../_component/Nav/BackButton';
import style from './notify.module.css';
import cx from 'classnames';

const data = [
    {id: 1, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 2, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 3, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 4, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 5, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 6, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 7, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 8, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 9, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 10, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 11, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 12, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},
    {id: 13, title: "알림 기능이 생겼어요!", content: "주요 내용은 이렇게 요약 해보세요!", dateTime: "202402041948", read: true},

]

type dataTypes = {
    title: string,
    content: string,
    dateTime: string,
    read: boolean
}

function NotifyHeader() {
    return (
        <div className={style.header}>
            <BackButton />
            <span>알림</span>
        </div>
    )
}

function NotifyItem({title, content, dateTime, read}:dataTypes) {
    return (
        <div className={style.item_box}>
            <div className={cx([style.icon_box, read && style.read ])}></div>
            <div className={style.text_box}>
                <p>{title}</p>
                <p>{content}</p>
                <p>{dateTime.slice(4,6)}/{dateTime.slice(6,8)} {dateTime.slice(8,10)}:{dateTime.slice(10,12)}</p>
            </div>
        </div>
    )
}


export default function NotifyPage() {
    return (
        <div className={style.container}>
            <NotifyHeader />
            <div className={style.content}>
                {data.map(item => 
                    <NotifyItem
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        dateTime={item.dateTime}
                        read={item.read}
                    />    
                )}
            </div>
        </div>
    )
} 