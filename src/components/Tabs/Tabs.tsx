"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties, useEffect, useRef, useState } from "react";

type TabsProps = {
  data: { value: string; text: string }[];
  defaultValue: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
};

export const Tabs = ({ data, defaultValue, onChange, style }: TabsProps) => {
  const [active, setActive] = useState(defaultValue || data[0].value);
  const [tabPositions, setTabPositions] = useState<{ width: number; left: number }[]>([]);
  const [activePosition, setActivePosition] = useState<{ width: number; left: number }>({
    width: 0,
    left: 0
  });
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (tabsRef.current.length > 0) {
      const newPosList: { width: number; left: number }[] = [];
      const parentRect = tabsRef.current[0]?.parentElement?.getBoundingClientRect();
      const parentLeft = parentRect ? parentRect.left : 0;

      tabsRef.current.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        newPosList.push({ width: rect.width, left: rect.left - parentLeft });
      });

      setTabPositions(newPosList);
    }
  }, [tabsRef.current]);

  useEffect(() => {
    if (tabPositions.length > 0) {
      const activeIndex = data.findIndex(item => item.value === active);
      setActivePosition(tabPositions[activeIndex]);
    }
  }, [tabPositions, active]);

  const handleChange = (value: string, index: number) => {
    setActive(value);
    setActivePosition(tabPositions[index]);
    onChange(value);
  };

  return (
    <TabSWrap style={{ position: "relative", ...style }}>
      {data.map((v, i) => {
        return (
          <TabItemWrap
            key={i}
            ref={el => (tabsRef.current[i] = el)}
            active={active === v.value}
            onClick={() => handleChange(v.value, i)}
          >
            {v.text}
          </TabItemWrap>
        );
      })}
      <TabUnderLine width={activePosition.width} left={activePosition.left} />
    </TabSWrap>
  );
};

const TabSWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabItemWrap = styled.div<{ active: boolean }>`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #CDD1D5;
  flex: 1;

  ${({ active }) =>
    active
      ? css`
      color: #494F54;
    `
      : css`
      color: #CDD1D5;
    `}
`;

const TabUnderLine = styled.div<{ width: number; left: number }>`
  position: absolute;
  bottom: -1px;
  height: 1px;
  background-color: #494F54;
  width: ${({ width }) => width || 0}px;
  left: ${({ left }) => left || 0}px;
  transition: all 0.3s;
`;
