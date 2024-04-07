"use client";

import { useState } from "react"
import style from './pushItem.module.css';
import cx from 'classnames';

type ToggleButtonProps = {
    checked: boolean,
    onChange: () => void
  }
  const ToggleButton = ({checked, onChange}:ToggleButtonProps) => {
    return (
      <div className={cx([style.toggle_box, checked && style.active])} onClick={onChange}>
        <div className={cx([style.toggle_circle, checked && style.active])}></div>
      </div>
    )
  }


export default function PushItem() {
    const [checked, setChecked] = useState(false);

    const toggleHandler = () => {
        setChecked(!checked)
    };
    
    return (
        <div className={style.container}>
            <span>푸시 알림</span>
            <ToggleButton checked={checked} onChange={toggleHandler} />
        </div>
    )
}