'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CSSProperties, useState } from 'react';

type TabsProps = {
  data: { value: string, text: string }[],
  defaultValue: string,
  onChange: (value: string) => void,
  style?: CSSProperties
}

export const Tabs = ({ data, defaultValue, onChange, style }: TabsProps) => {
  const [active, setActive] = useState(defaultValue || data[0].value);

  const handleChange = (value: string) => {
    setActive(value);
    onChange(value);
  }

  return (
    <TabSWrap style={style}>
      {data.map((v, i) => {
        return (
          <TabItemWrap 
            key={i} 
            active={active === v.value}
            onClick={() => handleChange(v.value)}
          >
            {v.text}
          </TabItemWrap>
        )
      })}
    </TabSWrap>
  )
}

const TabSWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TabItemWrap = styled.div<{ active: boolean }>`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #CDD1D5;
  flex: 1;

  ${({ active }) => active ?
    css`
      color: #494F54;
      border-bottom: 1px solid #494F54;
    `
    :
    css`
      color: #CDD1D5;
      border-bottom: 1px solid #EDF0F3;
    `
  }


`