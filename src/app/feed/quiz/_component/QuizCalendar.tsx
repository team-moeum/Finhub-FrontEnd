'use client'

import { useState } from "react";
import moment from 'moment'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components'
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
import { StyledCalendar,StyledCalendarWrapper } from "./styles";

const QuizCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };
  
  return (
  	<StyledCalendarWrapper >
        <StyledCalendar
          value={date}
          onChange={handleDateChange}
          
          formatDay={(locale:any, date:any) => moment(date).format("D")} // 일 제거 숫자만 보이게
          formatYear={(locale:any, date:any) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
          formatMonthYear={(locale:any, date:any) => moment(date).format("YYYY년 MM월")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
          calendarType="gregory" // 일요일 부터 시작
          showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
          next2Label={null} // +1년 & +10년 이동 버튼 숨기기
          prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
         
          minDetail="year" // 10년단위 년도 숨기기
        />
      </StyledCalendarWrapper>
  );
}

export default QuizCalendar;