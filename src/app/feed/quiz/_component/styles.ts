import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";


export const StyledCalendarWrapper = styled.div`
  width: calc(100%-32px);
  margin-left:16px;
  margin-right:16px;
  margin-top:22px;

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
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
 margin-bottom:2px;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    color: #000;
    font-family: "Pretendard Variable";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
    margin-bottom:0px;
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
    padding: 5px 0px 15px;
    position: relative;
    font-family: Inter;
    font-size: 12px;
font-style: normal;
font-weight: 550;
color:black;
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

export const StyledCalendar = styled(Calendar)``;

/* 오늘 버튼 스타일 */
export const StyledDate = styled.div`
  position: absolute;
  right: 7%;
  top: 6%;
  background-color: ${(props) => props.theme.primary_3};
  color: ${(props) => props.theme.yellow_2};
  width: 18%;
  min-width: fit-content;
  height: 1.5rem;
  text-align: center;
  margin: 0 auto;
  line-height: 1.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 800;
`;

/* 오늘 날짜에 텍스트 삽입 스타일 */
export const StyledToday = styled.div`
  font-size: x-small;
  color: ${(props) => props.theme.br_2};
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

/* 출석한 날짜에 점 표시 스타일 */
export const StyledDot = styled.div`
  background-color: ${(props) => props.theme.br_2};
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;