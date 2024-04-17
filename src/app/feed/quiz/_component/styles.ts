import Calendar from "react-calendar";
import styled from "styled-components";
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
 margin-top:-8px;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
   
    font-family: "Pretendard Variable";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
    margin-bottom:0px;
    padding-top:0px;


    color: var(--black-800, #191B1C);
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: #F9FAFA;
  
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: #F9FAFA;;
    color: ${(props) => props.theme.darkBlack};
  }
  .tile-content {
    display: flex;
    align-items: center;

  height: 100%;
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
   
  }

 
  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  /* 일요일에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${(props) => props.theme.black};
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: #F9FAFA;
    abbr {
      color: ${(props) => props.theme.black};
    }
    color:black;
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.gray_5};
    padding: 0;
  }

  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: ${(props) => props.theme.primary_2};
    abbr {
      color: white;
    }
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
display: flex; /* 내부 요소를 가로로 배치하기 위해 flex 사용 */

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
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
    color:  #F9FAFA;;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color:  #F3F3F3;};
    border-radius: 0.3rem;
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
margin-right:10px;
margin-top:8px;
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

