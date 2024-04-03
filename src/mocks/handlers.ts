import { http, HttpResponse } from 'msw'

const mockQuizzes = [
  { year: 2024, month: 4, day: 31, question: "금리가 오르면 대출을 받아야할까 ?", answer: "O", comment: "금리가 인상하면 저축을 해야 좋아요!!", topicList: [1, 2, 3, 4, 6] },
  { year: 2024, month: 4, day: 31, question: "주식투자는 쉽고 빠르게 돈을 벌 수 있는 방법이다.", answer: "X", comment: "주식투자는 고위험 고수익의 투자 방법이므로 신중히 결정해야 합니다.", topicList: [1, 2, 3, 4] },
  { year: 2024, month: 4, day: 31, question: "ETF는 주식과 비슷한 투자상품이다.", answer: "O", comment: "ETF는 주식을 추적하는 상품이므로 주식과 유사합니다.", topicList: [2, 3, 4, 5] },

];


export const handlers = [
  http.get('/api/category', ({ request }) => {
    return HttpResponse.json(
      [
        {name: "주식"},
        {name: "펀드"},
        {name: "etf"},
        {name: "irp"},
        {name: "연금"},
        {name: "파생상품"},
        {name: "test1"},
        {name: "test2"},
        {name: "test3"},
        {name: "test4"},
        {name: "test5"},
        {name: "test6"},
      ]
    )
  }),

  http.get('/api/category/:category', ({ request, params}) => {
    const { category } = params;

    return HttpResponse.json(
      [
        {id:1, title: `${category}?`, category:`${category}`, content: `${category} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:true},
        {id:2, title: `${category}?`, category:`${category}`, content: `${category} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:3, title: `${category}?`, category:`${category}`, content: `${category} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:true},
        {id:4, title: `${category}?`, category:`${category}`, content: `${category} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:5, title: `${category}?`, category:`${category}`, content: `${category} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:6, title: `${category}?`, category:`${category}`, content: `${category} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:7, title: `${category}?`, category:`${category}`, content: `${category} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:8, title: `${category}?`, category:`${category}`, content: `${category} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
      ]
    )
  }),
  http.get('/api/quiz', ({ request }) => {
    return HttpResponse.json(mockQuizzes);
  }),
];


