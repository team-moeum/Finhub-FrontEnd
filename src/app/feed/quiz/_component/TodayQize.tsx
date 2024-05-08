
"use client";
import { useState } from 'react'
import QuizResult from './QuizResult';
import style from './TodayQize.module.css'
import Image from 'next/image';
import { useTodayQuiz } from '@/states/server/queries';
import { usePostQuizSolve } from '@/states/server/mutations';


const TodayQize: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [showModal, setShowModal] = useState(false)
    const [answerResult, setAnswerResult] = useState('');
    const [answerResulti,setAnswerResulti]=useState('');
    const [answerResult2,setAnswerResult2]=useState('');
    const [errorMsg, setErrorMsg] = useState<string>(''); 
    const clickModal = () => setShowModal(!showModal)

    //ㅇ
    const { data: todayQuiz,error } = useTodayQuiz();
    const postQuizSolveMutation=usePostQuizSolve();


    
    const handleAnswerClick = async (quizId: number, answer: string) => {
     
            const response = await postQuizSolveMutation.mutateAsync({ quizId, answer });
            console.log("Quiz solved:", response);
            
            if (response.status === "SUCCESS") {
                const { correctYN } = response.data.quizInfo;
                if (correctYN === "Y") {
                    setAnswerResult('정답이에요!');
                    setAnswerResulti('👏');
                    setAnswerResult2('');
                } else {
                    setAnswerResult('아쉽지만 정답이 아니에요!');
                    setAnswerResulti('😓');
                    setAnswerResult2('더 공부해볼까요?');
                }
                setShowModal(true);
            } 
       
    };


   /*ㅇ
    const todayQuiz = quizlist.find(quiz => quiz.targetDate === new Date().toISOString().split('T')[0]); 
    */

    if (!todayQuiz) {
     
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

    if (error) {
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

    return (
        <div>
               <div className={style.container}>
                        <div className={style.s} >
                       <Image
                        src='/quiz/quiz_icon.svg'
                        alt='quiz_icon'
                        width={52}
                        height={62}
                       />  
                        </div >
                       
                      
                               <div className={style.bb}>
                               {todayQuiz && <p className={style.text}>{todayQuiz.question}</p>}
         
                                </div>
                        <div className={style.b}>
                            
                        <button className={`${style.btn} ${style.o}`} onClick={() => handleAnswerClick(todayQuiz.id, 'O')}>O</button>
                        <button className={style.btn} onClick={() => handleAnswerClick(todayQuiz.id, 'X')}>X</button>


                        </div>
                   


        
                
              </div>
           
           
              {showModal && <QuizResult clickModal={() => {setShowModal(false); closeModal();}} answerResult={answerResult} answerResulti={answerResulti} answerResult2={answerResult2} />}
         
         
         
          </div>
    )
}

export default TodayQize