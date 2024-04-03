"use client";
import { useState } from 'react'
import QuizResult from './QuizResult';
import style from './TodayQize.module.css'
import  {quizlist, Quiz} from '../quiz'



const TodayQize:React.FC= () => {
  	// 모달 버튼 클릭 유무를 저장할 state
    const [showModal, setShowModal] = useState(false)
    const [answerResult, setAnswerResult] = useState('');
    const [answerResulti,setAnswerResulti]=useState('');
    const [answerResult2,setAnswerResult2]=useState('');

	// 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
    const clickModal = () => setShowModal(!showModal)

    const handleAnswerClick = (isCorrect: boolean) => {
        const currentQuiz = quizlist[0];
        if ((isCorrect && currentQuiz.answer === 'O') || (!isCorrect && currentQuiz.answer === 'X')) {
            setAnswerResult('정답이에요!');
            setAnswerResulti('👏')
            setAnswerResult2('');
        } else {
            setAnswerResult('아쉽지만 정답이 아니에요!');
            setAnswerResulti('😓');
            setAnswerResult2('더 공부해볼까요?');
        }
        setShowModal(true);
    };


const currentQuiz:Quiz=quizlist[0]

    return (
        <div>
               <div className={style.container}>
                        <div className={style.s} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none"><path d="M10.465 1.06748C10.9481 -0.355829 13.0519 -0.355828 13.535 1.06749L15.2614 6.15291C15.4774 6.78944 16.0971 7.2204 16.7964 7.2204H22.3829C23.9464 7.2204 24.5965 9.13545 23.3316 10.0151L18.812 13.1581C18.2463 13.5515 18.0096 14.2488 18.2257 14.8853L19.952 19.9707C20.4352 21.394 18.7332 22.5776 17.4683 21.6979L12.9487 18.555C12.383 18.1616 11.617 18.1616 11.0513 18.555L6.53173 21.6979C5.26679 22.5776 3.56483 21.394 4.04799 19.9707L5.77431 14.8853C5.99039 14.2488 5.75368 13.5515 5.18798 13.1581L0.668421 10.0151C-0.596517 9.13545 0.0535755 7.2204 1.61713 7.2204H7.20361C7.90285 7.2204 8.52257 6.78944 8.73865 6.15291L10.465 1.06748Z" fill="url(#paint0_linear_563_11809)"/><defs><linearGradient id="paint0_linear_563_11809" x1="0" y1="8" x2="21.5" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#FEE47B"/><stop offset="1" stop-color="#F9C200"/></linearGradient></defs></svg>
                           
                        </div >
                       
                           
                               <div className={style.bb}>
                                <p  className={style.text}>{currentQuiz.question}</p>
                                </div>
                        <div className={style.b}>
                            
                        <button  className={`${style.btn} ${style.o}`} onClick={() => handleAnswerClick(true)} >O</button>
                        <button  className={style.btn}  onClick={() => handleAnswerClick(false)}>X</button>
                         
                        </div>
                   



      	
                
              </div>
           
		      {showModal && <QuizResult clickModal={() => setShowModal(false)} answerResult={answerResult} answerResulti={answerResulti} answerResult2={answerResult2}/>}
      </div>
    )
}

export default TodayQize