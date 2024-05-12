'use client';

import { useState } from 'react';
import QuizResult from './QuizResult';
import style from './TodayQize.module.css';
import Image from 'next/image';
import { useQuiz } from '@/states/server/queries';
import { usePostQuizSolve } from '@/states/server/mutations';
import { QuizSolveUser } from '@/model/QuizSolveUser';

const TodayQize = () => {
    const [showModal, setShowModal] = useState(false);
    const [quizResult, setQuizResult] = useState<QuizSolveUser>();

    const clickModal = () => setShowModal(!showModal);

    const { data: todayQuiz } = useQuiz();
    const quizSolveMutation = usePostQuizSolve({
        onSuccess: (data) => {
            setQuizResult(data);
            setShowModal(true);
        },
        onError: (data) => {
            console.log(data);
        }
    });

    const handleAnswerClick = (quizId: number, answer: "O" | "X") => {
        quizSolveMutation.mutate({ id: quizId, answer });
    }

    if (todayQuiz.status === "SOLVED") {
        return (
            <div className={style.container_i}>
                <div className={style.image_vacation}>
                    <Image
                        src='/quiz/quiz_icon_good.svg'
                        alt='quiz_icon'
                        width={235}
                        height={196}
                    />
                    <p className={style.image_title}>오늘의 퀴즈를 풀었어요</p>
                    <p className={style.image_comment}>내일도 퀴즈를 풀어주세요!</p>
                </div>
            </div>
        );
    }

    if (todayQuiz.status === "NO QUIZ") {
        return (
            <div className={style.container_i}>
                <div className={style.image_vacation}>
                    <Image
                        src='/quiz/quiz_icon_vacation.svg'
                        alt='quiz_icon'
                        width={235}
                        height={196}
                    />
                    <p className={style.image_title}>오늘은 퀴즈를 잠깐 쉬어가요</p>
                    <p className={style.image_comment}>다음 퀴즈를 기대해주세요!</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className={style.container}>
                <div className={style.s}>
                    <Image src='/quiz/quiz_icon.svg' alt='quiz_icon' width={52} height={62} />
                </div>
                <div className={style.bb}>
                    <p className={style.text}>{todayQuiz.question}</p>
                </div>
                <div className={style.b}>
                    <button className={`${style.btn} ${style.o}`} onClick={() => handleAnswerClick(todayQuiz.id, "O")}>O</button>
                    <button className={style.btn} onClick={() => handleAnswerClick(todayQuiz.id, "X")}>X</button>
                </div>
            </div>


            {showModal && quizResult && <QuizResult clickModal={() => setShowModal(false)} quizResult={quizResult} />}
        </div>
    );
}

export default TodayQize;
