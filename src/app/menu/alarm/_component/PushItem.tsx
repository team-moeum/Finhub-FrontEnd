"use client";

import cx from "classnames";

import style from "./pushItem.module.css";

type PushItemProps = {
  checked: boolean;
  onToggle: () => void;
};

type ToggleButtonProps = {
  checked: boolean;
  onChange: () => void;
};

const ToggleButton = ({ checked, onChange }: ToggleButtonProps) => {
  return (
    <div className={cx([style.toggle_box, checked && style.active])} onClick={onChange}>
      <div className={cx([style.toggle_circle, checked && style.active])}></div>
    </div>
  );
};

export default function PushItem({ checked, onToggle }: PushItemProps) {
  return (
    <div className={style.container}>
      <span>앱 알림</span>
      <ToggleButton checked={checked} onChange={onToggle} />
    </div>
  );
}
