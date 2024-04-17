
"use client";
import { useState } from 'react'
import QuizResult from './QuizResult';
import style from './TodayQize.module.css'
import  {quizlist} from '../quiz'
import Image from 'next/image';


const TodayQize: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [showModal, setShowModal] = useState(false)
    const [answerResult, setAnswerResult] = useState('');
    const [answerResulti,setAnswerResulti]=useState('');
    const [answerResult2,setAnswerResult2]=useState('');

    const clickModal = () => setShowModal(!showModal)

    const handleAnswerClick = (isCorrect: boolean) => {
        const today = new Date().toISOString().split('T')[0]; 
        const currentQuiz = quizlist.find(quiz => quiz.targetDate === today); 

        if (!currentQuiz) {
            return;
        }

        if ((isCorrect && currentQuiz.answer === 'O') || (!isCorrect && currentQuiz.answer === 'X')) {
            setAnswerResult('정답이에요!');
            setAnswerResulti('👏')
            setAnswerResult2('')
        } else {
            setAnswerResult('아쉽지만 정답이 아니에요!');
            setAnswerResulti('😓');
            setAnswerResult2('더 공부해볼까요?');
        }
        setShowModal(true);
   
    };

    const todayQuiz = quizlist.find(quiz => quiz.targetDate === new Date().toISOString().split('T')[0]); // 오늘의 퀴즈를 찾습니다.

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

    if (todayQuiz.correctYN!="") {
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
                                <p  className={style.text}>{todayQuiz.question}</p>
                                </div>
                        <div className={style.b}>
                            
                        <button  className={`${style.btn} ${style.o}`} onClick={() => handleAnswerClick(true)} >O</button>
                        <button  className={style.btn}  onClick={() => handleAnswerClick(false)}>X</button>
                    

                        </div>
                   


        
                
              </div>
           
           
              {showModal && <QuizResult clickModal={() => {setShowModal(false); closeModal();}} answerResult={answerResult} answerResulti={answerResulti} answerResult2={answerResult2} />}
         
         
         
          </div>
    )
}

export default TodayQize