'use client'
// QuizResult.tsx

import React, { Dispatch, SetStateAction } from 'react';
import style from './QuizResult.module.css';
import Link from 'next/link';
import { QuizSolveUser } from '@/model/QuizSolveUser';

import QuizPenIcon from '@/public/quiz/quiz_pen_icon.svg';

interface Props {
    clickModal: () => void;
    quizResult: QuizSolveUser;
}

const QuizResult = ({ clickModal, quizResult }: Props) => {
    if (!quizResult) {
        console.log('123')
        return null;
    }
    return (
        <div onClick={clickModal}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className={style.modalBackground}>
                    <div className={style.container}>
                        <div className={style.bb}>
                            <p className={style.result_i}>
                                {quizResult.correctYN === "Y" ? "👏" : "😓"}
                            </p>
                            <p className={style.title}>
                                {quizResult.correctYN === "Y" ? "정답이에요!" : "아쉽지만 정답이 아니에요!"}
                            </p>
                            <p className={style.text}>{quizResult.comment}</p>

                        </div>
                        <div className={style.box}>
                            {quizResult.correctYN === 'N' && <p className={style.text2}>더 공부해볼까요?</p>}
                            <div className={style.category_box}>


                            </div>
                        </div>

                        <div className={style.btn_box}>
                            <button onClick={clickModal} className={`${style.btn} ${style.left}`}>
                                닫기
                            </button>
                            <Link href={'/feed/quiz'} className={`${style.btn} ${style.right}`}>
                                <QuizPenIcon />
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
