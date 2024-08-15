"use client";

import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";

import { StyleButton, StyleButtonContainer, StyledCalendarWrapper } from "./styles";

import { usePostQuizCalendarEmoji } from "@/states/server/mutations";
import { useQuizCalendar } from "@/states/server/queries";

import { useMounted } from "@/hooks/useMounted";

import { Box } from "@/components/Box";
import { Container } from "@/components/Container";

export const SkeletonCalendar = () => {
  return (
    <Container>
      <Box mt={22} height={330} radius={20} backgroundColor="#F9FAFA" />
    </Container>
  );
};

const QuizCalendar = () => {
  const today = new Date();

  const [date, setDate] = useState<Date | [Date, Date] | null>(today);
  const [activeDate, setActiveDate] = useState<Date | null>();
  const [selectedButton, setSelectedButton] = useState("😎");
  const [isExpanded, setIsExpanded] = useState(false);
  const isMount = useMounted();

  const activeYear = useMemo(
    () => (activeDate ? activeDate.getFullYear() : today.getFullYear()),
    [activeDate]
  );
  const activeMonth = useMemo(
    () => (activeDate ? activeDate.getMonth() + 1 : today.getMonth() + 1),
    [activeDate]
  );

  const { data: quizCalendarData } = useQuizCalendar(activeYear.toString(), activeMonth.toString());
  const postEmojiMutation = usePostQuizCalendarEmoji();

  useEffect(() => {
    const storedEmoji = localStorage.getItem("selectedEmoji");
    if (storedEmoji) {
      setSelectedButton(storedEmoji);
    }
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (emoji: string) => {
    let emojiId: number;
    switch (emoji) {
      case "☘️":
        emojiId = 1;
        break;
      case "👍":
        emojiId = 2;
        break;
      case "😎":
        emojiId = 3;
        break;
      default:
        emojiId = 0;
        break;
    }

    setSelectedButton(emoji);
    setIsExpanded(false);
    postEmojiMutation.mutate({ id: emojiId });
    localStorage.setItem("selectedEmoji", emoji);
  };

  const getQuizListWithEmoji = (date: Date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    if (quizCalendarData?.quizData) {
      const solvedYn = quizCalendarData.quizData.find(
        quiz => quiz.date === formattedDate
      )?.solvedYn;
      if (solvedYn === "Y") return selectedButton;
      else return null;
    } else return null;
  };

  const handleDateChange = (newDate: Date | [Date, Date] | null) => {
    setDate(newDate);
  };

  if (!isMount) return <SkeletonCalendar />;
  return (
    <StyledCalendarWrapper>
      <StyleButtonContainer onClick={toggleExpanded}>
        {isExpanded && selectedButton !== "☘️" && (
          <StyleButton onClick={() => handleButtonClick("☘️")}>☘️</StyleButton>
        )}
        {isExpanded && selectedButton !== "👍" && (
          <StyleButton onClick={() => handleButtonClick("👍")}>👍</StyleButton>
        )}
        {isExpanded && selectedButton !== "😎" && (
          <StyleButton onClick={() => handleButtonClick("😎")}>😎</StyleButton>
        )}
        <StyleButton>{selectedButton}</StyleButton>
      </StyleButtonContainer>

      <Calendar
        locale="ko"
        prevLabel="<"
        nextLabel=">"
        value={date}
        onChange={newDate => handleDateChange(newDate as Date | [Date, Date] | null)}
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
          if (isMount) {
            return getQuizListWithEmoji(date);
          }
        }}
      />
    </StyledCalendarWrapper>
  );
};

export default QuizCalendar;
