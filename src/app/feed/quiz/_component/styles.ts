import styled from "@emotion/styled";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  width: calc(100%-32px);
  margin-left:16px;
  margin-right:16px;
  margin-top:22px;
  position: relative;

  .react-calendar {
  width: 100%;
  border: none;
  border-radius: 20px;
  background: var(--light-gray, #F9FAFA);
  padding:18px 5px;
  }

  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
  color:#000;
  font-size:2px;
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
  margin-bottom:2px;
  margin-top:-3px;
  &:hover {
    background-color: #f9fafa; /* 버튼에 마우스를 올렸을 때 백그라운드 색상 변경 */
  }}

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom:6px;
  padding-top:-2px;
  color: var(--black-800, #191B1C);
  &:hover {
    background-color: #E6;
    border-radius:0.7rem;  
  }}

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
  background-color: #F9FAFA;
  border-radius: 0.7rem;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
  background-color: #F9FAFA;;
  }

  .tile-content {
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 0.7rem;
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
  flex-grow: 0 !important; 
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
  font-size:0.9rem;
  text-decoration: none;
  font-weight: 800;
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
  background: #F9FAFA;
  color:black;
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
  position: relative;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 550;
  color:black;
  height:45px;
  display: flex; 
  align-items:center;
  flex-direction:column;
  }

  .tile-content > div {
  margin-top: auto; 
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
  flex: 0 0 calc(33.3333% - 10px) !important;
  margin-inline-start: 5px !important;
  margin-inline-end: 5px !important;
  margin-block-end: 10px;
  margin-bottom:7px;

  padding: 20px 6.6667px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 0.7rem;
  color:  #000;;
  }

  /* 선택 가능한 오늘 날짜 스타일 적용 */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus,
  .react-calendar__tile--now {
  background-color: #E6E6E6;
  border-radius: 0.7rem;
  cursor: default;
  }
  
  /* 일자 타일에 대한 스타일 */
  .react-calendar__month-view .react-calendar__tile {
  pointer-events: none; 
  }

  /* 월에 대한 스타일과 클릭 가능 설정 */
  .react-calendar__year-view__months__month {
  cursor: pointer; 
  }

  /* 오늘 날짜에 대한 스타일 */
  .react-calendar__tile--now {
  cursor: default;
  }

  /* 활성화된 날짜에 대한 스타일 */
  .react-calendar__tile--active {
  cursor: default; 
  }

  .react-calendar__tile {
  border-radius: 0.7rem;
  padding: 12px;
  }
`;

export const StyleButtonContainer = styled.div`
  position: absolute;
  display:flex;
  flex-direction:row;
  right:0px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--primary-primary, #50BF50);
  margin-right:13px;
  margin-top:13px;
  padding:5px;
  padding-top:3px;
  gap:16px;
`;

export const StyleButton = styled.button`
  transition: all 0.2s; 
  color: var(--black-800, #191B1C);
  font-family: "Pretendard Variable";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;