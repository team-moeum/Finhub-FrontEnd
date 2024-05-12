'use client'
import { Link } from 'react-router-dom';
import style from './QuizList.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { quizlist } from '../quiz';
import TodayQize from './TodayQize';
import QuizResult from './QuizResult';
import { useMissedQuizQuery } from '@/states/server/queries';
import { useSolvedQuizQuery } from '@/states/server/queries';
import moment from 'moment';
import { MissedQuiz } from '@/model/missedQuiz';
import { SolvedQuiz } from '@/model/solvedQuiz';
import Loading from '@/app/loading';


export default function QuizList({ hideMainNav }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('missed');
  const [selectedQuiz, setSelectedQuiz] = useState('incorrect')
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);
  const [showTodayQuizModal, setShowTodayQuizModal] = useState(false); // TodayQize 모달 열기 여부 상태 추가
  const [showQuizResultModal, setShowQuizResultModal] = useState(false); // TodayQize 모달 열기 여부 상태 추가

  const requestDate = moment().format("YYYYMMDD");

  const {
    data: missedQuizData,
    fetchNextPage: fetchNextMissedPage,
    hasNextPage: hasMissedNextPage,
    isFetching: isMissedFetching
  } = useMissedQuizQuery({ date: requestDate });
  const missedQuizList = missedQuizData?.pages.flatMap(page => page) as MissedQuiz[];

  console.log(missedQuizList);

  const {
    data: solvedQuizData,
    fetchNextPage: fetchNextSolvedPage,
    hasNextPage: hasSolvedNextPage,
    isFetching: isSolvedFetching
  } = useSolvedQuizQuery({ isCorrect: "Y", date: requestDate });
  const solvedQuizList = solvedQuizData?.pages.flatMap(page => page) as SolvedQuiz[];

  console.log(solvedQuizList);


  // TodayQize 모달 열기 함수
  const openTodayQuizModal = () => {
    setShowTodayQuizModal(true);
  };

  //quizResult 모달 열기 함수
  const openQuizResultModal = () => {
    setShowQuizResultModal(true);
  }

  const openModal = (Question: any) => {
    setSelectedQuestion(Question);
    setIsOpen(true);
  };

  useEffect(() => {
    const missedButton = document.getElementById('missedButton');
    if (missedButton) {
      missedButton.classList.add(style.active);
    }
  }, []);

  useEffect(() => {
    const solvedButton = document.getElementById('solvedButton');
    if (solvedButton) {
      solvedButton.classList.add(style.active);
    }
  }, []);



  const today = new Date();

  const previewQuestions: any = quizlist
    .filter((quiz) => quiz.status === 'SUCCESS' && new Date(quiz.targetDate) <= today)
    .sort((a, b) => new Date(b.targetDate).getTime() - new Date(a.targetDate).getTime());

  const previewQuestions_f: any = quizlist
    .filter((quiz) => quiz.status === 'FAIL' && new Date(quiz.targetDate) <= today)
    .sort((a, b) => new Date(b.targetDate).getTime() - new Date(a.targetDate).getTime());

  const previewQuestions_c: any = quizlist
    .filter((quiz) => quiz.correctYN === 'Y' && new Date(quiz.targetDate) <= today)
    .sort((a, b) => new Date(b.targetDate).getTime() - new Date(a.targetDate).getTime());

  const previewQuestions_i: any = quizlist
    .filter((quiz) => quiz.correctYN === 'N' && new Date(quiz.targetDate) <= today)
    .sort((a, b) => new Date(b.targetDate).getTime() - new Date(a.targetDate).getTime());

  if (isMissedFetching || isSolvedFetching) return <Loading height={300} />;
  return (
    <div className={style.container}>
      <div className={`${style.select_one_box}`}>
        <button
          className={`${style.type_sel}  ${selectedType === 'missed' ? style.active : ''}`}
          onClick={() => setSelectedType('missed')}
        >
          놓친 퀴즈
        </button>
        <button
          className={`${style.type_sel} ${selectedType === 'solved' ? style.active : ''}`}
          onClick={() => setSelectedType('solved')}
        >
          풀었던 퀴즈
        </button>
      </div>

      {selectedType === 'missed' && (
        missedQuizList?.map((question: any) => (
          <button key={question.id} className={style.item_box} onClick={openTodayQuizModal} >
            <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
            <div className={style.item_box_text}>
              <div className={style.item_box_font}> {question.question}</div>
              <div className={style.item_box_cal}>{question.targetDate}</div>
            </div>
          </button>

        ))
      )}

      {showTodayQuizModal && (
        <div className={style.modal}>
          <TodayQize />
        </div>
      )}

      {selectedType === 'solved' && (
        solvedQuizList?.map((question: any) => (
          <button key={question.id} className={style.item_box} onClick={openTodayQuizModal} >
            <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
            <div className={style.item_box_text}>
              <div className={style.item_box_font}> {question.question}</div>
              <div className={style.item_box_cal}>{question.targetDate}</div>
            </div>
          </button>

        ))
      )}




      <button onClick={openModal} className={`${style.more}`}>

        <p> 더보기</p>
        <svg className={style.icon} width="20" height="20" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1L5.5 6L1 1" stroke="#A6ABAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`${style.btnClick} ${isOpen ? style.open : ''}`}>
        <a href="quiz" className={style.top}>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M7 1L1 7L7 13" stroke="#979797" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className={`${style.select_one_box}`}>
          <button
            className={`${style.type_sel}  ${selectedType === 'missed' ? style.active : ''}`}
            onClick={() => setSelectedType('missed')}
          >
            놓친 퀴즈
          </button>
          <button
            className={`${style.type_sel} ${selectedType === 'solved' ? style.active : ''}`}
            onClick={() => setSelectedType('solved')}
          >
            풀었던 퀴즈
          </button>
        </div>

        <div className={style.item_item_box}>

          {selectedType === 'missed' &&

            previewQuestions.map((question: any) => (
              <button key={question.id} className={style.item_box} onClick={openTodayQuizModal}>
                <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
                <div className={style.item_box_text}>
                  <div className={style.item_box_font}> {question.question}</div>
                  <div className={style.item_box_cal}>{question.targetDate}</div>
                </div>
              </button>
            ))}

          {showTodayQuizModal && (
            <div className={style.modal_container}> <div className={style.modal}>
              <TodayQize />
            </div>
            </div>
          )}


          {selectedType === 'solved' &&
            (
              <div>
                <div className={style.select}>
                  <button
                    className={`${style.select_quiz} ${selectedQuiz === 'incorrect' ? style.active : ''}`}
                    onClick={() => setSelectedQuiz('incorrect')}
                  >
                    틀렸던 퀴즈
                  </button>
                  <button
                    className={`${style.select_quiz}  ${selectedQuiz === 'correct' ? style.active : ''}`}
                    onClick={() => setSelectedQuiz('correct')}
                  >
                    맞춘 퀴즈
                  </button>
                </div>


                <div className={style.item_item_box}>

                  {selectedQuiz === 'correct' &&

                    previewQuestions_c.map((question: any) => (
                      <button key={question.id} className={style.item_box}>
                        <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
                        <div className={style.item_box_text}>
                          <div className={style.item_box_font}> {question.question}</div>
                          <div className={style.item_box_cal}>{question.targetDate}</div>
                        </div>
                      </button>
                    ))}
                  {selectedQuiz === 'incorrect' &&

                    previewQuestions_i.map((question: any) => (
                      <button key={question.id} className={style.item_box}>
                        <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
                        <div className={style.item_box_text}>
                          <div className={style.item_box_font}> {question.question}</div>
                          <div className={style.item_box_cal}>{question.targetDate}</div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            )}
        </div>
      </div>

    </div>

  );
}