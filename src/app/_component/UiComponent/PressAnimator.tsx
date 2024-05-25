import style from './UiComponent.module.css';

interface PressProps {
  radius?: number;
  children: React.ReactNode;
}

export const PressBox = ({ radius = 10, children }: PressProps) => {
  return (
    <div className={style.pressBox_backgroundWrap} style={{ borderRadius: radius }}>
      <div className={style.pressBox_ScaleWrap}>
        {children}
      </div>
    </div>
  )
}

export const PressButton = ({ children }: Partial<PressProps>) => {
  return (
    <div className={style.pressButton_ScaleWrap}>
      {children}
    </div>
  )
}