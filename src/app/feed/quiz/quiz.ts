'use client'

type Topic={
    topicName:string;
}

export interface Quiz{
    year:number;
    month:number;
    day:number;
    question:string;
    answer:string;
    comment:string;
    result:boolean;
    topicList:Topic[];
        
}

export const quizlist:Quiz[]=[{
    year : 2024,
    month : 4,
    day : 3,
    question : "1번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "O",
    comment : "1번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:true,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "2번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "2번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:true,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "3번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "O",
    comment : "3번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:true,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "4번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "4번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:true,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "5번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "O",
    comment : "5번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "6번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "6번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "7번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "O",
    comment : "7번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "8번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "8번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "9번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "O",
    comment : "9번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "10번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "10번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "11번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "11번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "12번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "12번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "13번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "13번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "14번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "14번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
{
    year : 2024,
    month : 4,
    day : 3,
    question : "15번 금리가 오르면 대출을 받아야 할까요 아니면 받지 말아야 할까요 뭐가 정답일까요 뭐가 오답일까여?",
    answer : "X",
    comment : "15번 금리가 인상하면 저축을 해야 좋아요 알겠죠 계속 기억하세요 기억하세요 금리가 인상하면 저축!!",
    result:false,
    topicList : [{topicName:'주식'},{topicName:'etf'}],
},
]


