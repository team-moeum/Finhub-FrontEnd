'use client'
import React, { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { StyledCalendarWrapper, StyleButton, StyleButtonContainer } from "./styles";
import { quizlist } from "../quiz";
import { useQuizCalendar } from "@/states/server/queries";

const QuizCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState<Date | [Date, Date] | null>(today);
  const [activeDate, setActiveDate] = useState<Date | null>();
  const [selectedButton, setSelectedButton] = useState('😎');
  const [isExpanded, setIsExpanded] = useState(false);
  const [quizzesWithCorrectYN, setQuizzesWithCorrectYN] = useState<string[]>([]);

  const activeYear = activeDate ? activeDate.getFullYear() : today.getFullYear();
  const activeMonth = activeDate ? activeDate.getMonth() + 1 : today.getMonth() + 1;

  const { data: quizCalendarData } = useQuizCalendar(activeYear.toString(), activeMonth.toString());
  console.log(quizCalendarData);

  useEffect(() => {
    console.log(activeYear, activeMonth)
  }, [activeDate])

  useEffect(() => {
    // 퀴즈 목록에서 correctYN 값이 있는 퀴즈만 가져와서 emojis 배열에 저장합니다.
    const emojis: string[] = quizlist.reduce((accumulator: string[], quiz) => {
      if (quiz.correctYN !== "") {
        accumulator.push(quiz.correctYN);
      }
      return accumulator;
    }, []);
    setQuizzesWithCorrectYN(emojis);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (emoji: string) => {
    if (selectedButton === emoji) {
      setIsExpanded(false); // 선택된 버튼이 다시 클릭되면 확장 상태를 닫습니다.
    } else {
      setSelectedButton(emoji);
      setIsExpanded(true);
    }
  };

  const getQuizListWithEmoji = (date: Date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    if (quizCalendarData.quizData) {
      const solvedYn = quizCalendarData.quizData.find(quiz => quiz.date === formattedDate)?.solvedYn;
      if (solvedYn === "Y") return selectedButton;
      else return null;
    }
    else return null;
  };

  const handleDateChange = (newDate: Date | [Date, Date] | null) => {
    setDate(newDate);
  };

  return (
    <StyledCalendarWrapper>
      <StyleButtonContainer onClick={toggleExpanded}>
        {isExpanded && selectedButton !== '☘️' && (
          <StyleButton onClick={() => handleButtonClick('☘️')}>☘️</StyleButton>
        )}
        {isExpanded && selectedButton !== '👍' && (
          <StyleButton onClick={() => handleButtonClick('👍')}>👍</StyleButton>
        )}
        {isExpanded && selectedButton !== '😎' && (
          <StyleButton onClick={() => handleButtonClick('😎')}>😎</StyleButton>
        )}
        <StyleButton>{selectedButton}</StyleButton>
      </StyleButtonContainer>

      <Calendar
        locale='ko'
        prevLabel="<"
        nextLabel=">"
        value={date}
        onChange={(newDate) => handleDateChange(newDate as Date | [Date, Date] | null)}
        onActiveStartDateChange={({ activeStartDate }) => setActiveDate(activeStartDate)}
        formatDay={(locale: any, date: any) => moment(date).format("D")}
        formatYear={(locale: any, date: any) => moment(date).format("YYYY")}
        formatMonthYear={(locale: any, date: any) => moment(date).format("YYYY년 MM월")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        tileContent={({ date }: { date: Date }) => {
          return getQuizListWithEmoji(date);
        }}
      />
    </StyledCalendarWrapper>
  );
};

export default QuizCalendar;
