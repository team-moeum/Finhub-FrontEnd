import style from './UiComponent.module.css';

interface PressProps {
  py?: number;
  radius?: number;
  onClick?: () => void;
  children: React.ReactNode;
}

export const PressBox = ({ py = 16, radius = 10, children }: PressProps) => {
  return (
    <div className={style.pressBox_backgroundWrap} style={{ 
      paddingLeft: py,
      paddingRight: py,
      borderRadius: radius
    }}>
      <div className={style.pressBox_ScaleWrap}>
        {children}
      </div>
    </div>
  )
}

export const PressButton = ({ onClick, children }: Partial<PressProps>) => {
  return (
    <div className={style.pressButton_ScaleWrap} onClick={onClick}>
      {children}
    </div>
  )
}