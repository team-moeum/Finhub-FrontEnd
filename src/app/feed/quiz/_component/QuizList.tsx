'use client'
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
import { QuizSolveUser } from '@/model/QuizSolveUser';

const formatDate = (dateString: string): string => {
  return dateString.replace(/-/g, '');
};

export default function QuizList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('missed');
  const [selectedQuiz, setSelectedQuiz] = useState('incorrect')
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);
  const [showTodayQuizModal, setShowTodayQuizModal] = useState(false); // TodayQize 모달 열기 여부 상태 추가
  const [showQuizResultModal, setShowQuizResultModal] = useState(false); // TodayQize 모달 열기 여부 상태 추가
  const [selectedQuizDate, setSelectedQuizDate] = useState<any>(null);
  const requestDate = moment().format("YYYYMMDD");
  const [showSimpleModal, setShowSimpleModal] = useState(false);

  const {
    data: missedQuizData,
    fetchNextPage: fetchNextMissedPage,
    hasNextPage: hasMissedNextPage,
    isFetching: isMissedFetching,
  } = useMissedQuizQuery({ date: requestDate });
  const missedQuizList = missedQuizData?.pages.flatMap(page => page) as MissedQuiz[];

  const {
    data: missedQuizData_,
    fetchNextPage: fetchNextMissedPage_,
    hasNextPage: hasMissedNextPage_,
    isFetching: isMissedFetching_
  } = useMissedQuizQuery({ date: requestDate, limit: 100 });
  const missedQuizList_ = missedQuizData_?.pages.flatMap(page => page) as MissedQuiz[];

  const {
    data: solvedQuizData,
    fetchNextPage: fetchNextSolvedPage,
    hasNextPage: hasSolvedNextPage,
    isFetching: isSolvedFetching
  } = useSolvedQuizQuery({ isCorrect: "Y", date: requestDate });
  const solvedQuizList = solvedQuizData?.pages.flatMap(page => page) as SolvedQuiz[];

  console.log(solvedQuizList);

  const {
    data: solvedQuizData_,
    fetchNextPage: fetchNextSolvedPage_,
    hasNextPage: hasSolvedNextPage_,
    isFetching: isSolvedFetching_
  } = useSolvedQuizQuery({ isCorrect: "N", date: requestDate });
  const solvedQuizList_ = solvedQuizData_?.pages.flatMap(page => page) as SolvedQuiz[];

  const handleModalClose = () => {
    setShowQuizResultModal(false);
    setSelectedQuizDate(null);  // Clear the selected quiz data when closing the modal
  };

  // TodayQize 모달 열기 함수
  const openTodayQuizModal = (targetDate: string) => {
    setSelectedQuizDate(targetDate);
    setShowTodayQuizModal(true);
  };

  //quizResult 모달 열기 함수
  const [selectedQuizResult, setSelectedQuizResult] = useState<QuizSolveUser | null>(null);

  const openQuizResultModal = (quizResult: any) => {
    setSelectedQuizResult(quizResult);
    setShowQuizResultModal(true);
  };

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

  if (!missedQuizData) {
    console.log('123')
    return (
      <>
        <div className={`${style.select_one_box}`}>
          <button
            className={`${style.type_sel}`}
          >
            놓친 퀴즈
          </button>
          <button
            className={`${style.type_sel}`}
          >
            풀었던 퀴즈
          </button>
        </div>

        <div className={style.container_i}>
          <div className={style.image_vacation}>
            <Image
              src='/quiz/quiz_icon_login.svg'
              alt='quiz_icon'
              width={235}
              height={196}
            />
            <p className={style.image_title}>로그인이 필요한 서비스입니다</p>
          </div>
        </div>
      </>
    );
  }



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
        (missedQuizList && missedQuizList.length > 0) ? (
          missedQuizList.map((question: any) => (
            <button key={question.id} className={style.item_box} onClick={() => openTodayQuizModal(question.targetDate)} >
              <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
              <div className={style.item_box_text}>
                <div className={style.item_box_font}> {question.question}</div>
                <div className={style.item_box_cal}>{question.targetDate}</div>
              </div>
            </button>
          ))
        ) : (
          <div className={style.noquiz_box}>
            <p className={style.noquiz_font}>놓친 퀴즈가 없어요</p>
          </div>
        )
      )}


      {showTodayQuizModal && (
        <div className={style.modal}>
          <TodayQize date={formatDate(selectedQuizDate)} />
        </div>
      )}

      {selectedType === 'solved' && (
        (solvedQuizList_ && solvedQuizList_.length > 0) ? (
          solvedQuizList_.map((quizResult: any) => (
            <button key={quizResult.id} className={style.item_box} onClick={() => openQuizResultModal(quizResult)}>
              <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
              <div className={style.item_box_text}>
                <div className={style.item_box_font}> {quizResult.question}</div>
                <div className={style.item_box_cal}>{quizResult.targetDate}</div>
              </div>
            </button>
          ))
        ) : (
          <div className={style.noquiz_box}>
            <p className={style.noquiz_font}>풀었던 퀴즈가 없어요</p>
          </div>
        )
      )}

      {showQuizResultModal && selectedQuizResult && (
        <div className={style.modal}>
          <QuizResult clickModal={() => setShowQuizResultModal(false)} quizResult={selectedQuizResult} />
        </div>
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

          {selectedType === 'missed' && (
            (missedQuizList && missedQuizList.length > 0) ? (
              missedQuizList.map((question: any) => (
                <button key={question.id} className={style.item_box} onClick={() => openTodayQuizModal(question.targetDate)} >
                  <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
                  <div className={style.item_box_text}>
                    <div className={style.item_box_font}> {question.question}</div>
                    <div className={style.item_box_cal}>{question.targetDate}</div>
                  </div>
                </button>
              ))
            ) : (
              <div className={style.noquiz_box}>
                <p className={style.noquiz_font}>놓친 퀴즈가 없어요</p>
              </div>
            )
          )}

          {showTodayQuizModal && (
            <div className={style.modal}>
              <TodayQize date={formatDate(selectedQuizDate)} />
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

                  {selectedQuiz === 'correct' && (
                    (solvedQuizList && solvedQuizList.length > 0) ? (
                      solvedQuizList.map((quizResult: any) => (
                        <button key={quizResult.id} className={style.item_box} onClick={() => openQuizResultModal(quizResult)}>
                          <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
                          <div className={style.item_box_text}>
                            <div className={style.item_box_font}> {quizResult.question}</div>
                            <div className={style.item_box_cal}>{quizResult.targetDate}</div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className={style.noquiz_box}>
                        <p className={style.noquiz_font}>맞춘 퀴즈가 없어요</p>
                      </div>
                    )
                  )}

                  {showQuizResultModal && selectedQuizResult && (
                    <div className={style.modal}>
                      <QuizResult clickModal={() => setShowQuizResultModal(false)} quizResult={selectedQuizResult} />
                    </div>
                  )}


                  {selectedQuiz === 'incorrect' && (
                    (solvedQuizList_ && solvedQuizList_.length > 0) ? (
                      solvedQuizList_.map((quizResult: any) => (
                        <button key={quizResult.id} className={style.item_box} onClick={() => openQuizResultModal(quizResult)}>
                          <Image src='/quiz/quiz_icon_list.svg' alt='quiz_icon' width={25} height={23} />
                          <div className={style.item_box_text}>
                            <div className={style.item_box_font}> {quizResult.question}</div>
                            <div className={style.item_box_cal}>{quizResult.targetDate}</div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className={style.noquiz_box}>
                        <p className={style.noquiz_font}>틀렸던 퀴즈가 없어요</p>
                      </div>
                    )
                  )}
                  {showQuizResultModal && selectedQuizResult && (
                    <div className={style.modal}>
                      <QuizResult clickModal={() => setShowQuizResultModal(false)} quizResult={selectedQuizResult} />
                    </div>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>

    </div>

  );
}

