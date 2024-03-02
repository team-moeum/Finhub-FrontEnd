"use client";

import { useState } from 'react';
import style from './SelectUserType.module.css';
import cx from 'classnames';

const data = [
    {name: '개발자'},
    {name: '디자이너'},
    {name: '선생님'},
    {name: '대학생'},
    {name: '직업 이름1'},
    {name: '직업 이름2'},
    {name: '직업 이름3'},
    {name: '직업 이름4'},
]

type UserTypeItemProps = {
    name: string,
    checked: boolean,
    onChange: (name:string) => void
}
const UserTypeItem = ({name, checked, onChange}:UserTypeItemProps) => {
    return (
        <div 
            className={cx([style.item_box, checked && style.active])}
            onClick={() => onChange(name)}
        >
            {name}
        </div>
    )
}


export default function SelectUserType() {
    const [userType, setUserType] = useState('대학생');
    const [dropList, setDropList] = useState(false);

    const handleChangeUserType = (name:string) => {
        setUserType(name);
        setDropList(!dropList);
    }

    const handleDropList = () => {
        setDropList(!dropList);
    }

    return (
        <div className={style.container}>
            <div className={cx([style.select_box, dropList && style.active])} onClick={handleDropList}>
                <span>{userType}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            {dropList ? 
                <div className={style.select_list}>
                    <div className={style.select_list_wrap}>
                        {data.map((item, i) => (
                            <UserTypeItem 
                                key={i}
                                name={item.name}
                                checked={item.name === userType}
                                onChange={handleChangeUserType}
                            />
                        ))}
                    </div>
                </div>
                :
                <div className={style.info_box}>
                    <p>
                        맞춤형 설명에서 직업을 선택하지 않아도<br />
                        <span>설정한 직업</span>으로 설명이 나와요.
                    </p>
                </div>
            }
        </div>
    )
}