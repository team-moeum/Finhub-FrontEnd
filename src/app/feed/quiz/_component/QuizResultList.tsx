
'use client'
// QuizResult.tsx

import React ,{Dispatch,SetStateAction}from 'react';
import style from './QuizResult.module.css';
import Link from 'next/link';
import { quizlist } from '../quiz';

interface Props {
  clickModal: () => void;
  answerResult: string;
  answerResulti: string;
  answerResult2: string;
}



const QuizResult: React.FC<Props> = ({ clickModal, answerResult,answerResulti, answerResult2 }) => {
  const todayQuiz = quizlist.find(quiz => quiz.targetDate === new Date().toISOString().split('T')[0]); 


    return (
        <div onClick={clickModal}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className={style.modalBackground}>
                    <div className={style.container}>
                        <div className={style.bb}>
                          <p className={style.result_i}>{answerResulti}</p>
                            <p className={style.title}>{answerResult}</p>
                            <p className={style.text}>{todayQuiz?.comment}</p>
                            
                        </div>
                        <div className={style.box}>
                        <p className={style.text2}>{answerResult2}</p>
                        <div className={style.category_box}>
                          
                       
                          <a href={`../${todayQuiz?.topicList[0]}/1`} className={style.category}>
    #{todayQuiz?.topicList[0]}
</a>
<a href={`../${todayQuiz?.topicList[1]}/1`} className={style.category}>
    #{todayQuiz?.topicList[1]}
</a>

                        </div>
                        </div>
                        
                        <div className={style.btn_box}>
                            <button onClick={clickModal} className={`${style.btn} ${style.left}`}>
                                닫기
                            </button>
                            <Link href={'feed/quiz'} className={`${style.btn} ${style.right}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.2925 6.09558L14.7916 4.60405C15.1229 4.27436 15.2886 4.10952 15.3988 3.94515C15.8506 3.27133 15.8506 2.39134 15.3988 1.71752C15.2886 1.55315 15.1229 1.38831 14.7916 1.05862L14.7916 1.05862C14.4632 0.731902 14.299 0.568545 14.1353 0.459659C13.4643 0.013447 12.5912 0.013447 11.9202 0.459659C11.7565 0.568545 11.5923 0.731902 11.2639 1.05862L11.2639 1.05862L9.72598 2.58886C10.5766 4.04997 11.8068 5.26423 13.2925 6.09558ZM8.26918 4.03835L2.3659 9.91199L2.36589 9.912C1.9386 10.3372 1.72495 10.5497 1.58438 10.8113C1.44382 11.0728 1.38443 11.3683 1.26564 11.9593L0.766406 14.4429C0.699561 14.7754 0.666138 14.9417 0.760655 15.0364C0.855172 15.1311 1.02151 15.098 1.35419 15.0318L3.86595 14.532C4.45389 14.415 4.74786 14.3565 5.0085 14.2176C5.26914 14.0787 5.48162 13.8673 5.90657 13.4444L11.8285 7.55223C10.395 6.6544 9.18057 5.45245 8.26918 4.03835Z"
                                        fill="#50BF50"
                                    />
                                </svg>
                                다른 퀴즈 풀기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizResult;
