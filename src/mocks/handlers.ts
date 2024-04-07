import { API_BASE_URL } from '@/app/_component/MSWComponent';
import { http, HttpResponse } from 'msw'

const CategoryMap = [
  {categoryId: 1, name: "주식"},
  {categoryId: 2, name: "펀드"},
  {categoryId: 3, name: "etf"},
  {categoryId: 4, name: "irp"},
  {categoryId: 5, name: "연금"},
  {categoryId: 6, name: "파생상품"},
  {categoryId: 7, name: "test1"},
  {categoryId: 8, name: "test2"},
  {categoryId: 9, name: "test3"},
  {categoryId: 10, name: "test4"},
  {categoryId: 11, name: "test5"},
  {categoryId: 12, name: "test6"},
  {categoryId: 13, name: "test6"},
  {categoryId: 14, name: "test7"},
  {categoryId: 15, name: "test8"},
  {categoryId: 16, name: "test9"},
  {categoryId: 17, name: "test10"},
  {categoryId: 18, name: "test11"},
  {categoryId: 19, name: "test12"},
  {categoryId: 20, name: "test13"},
]

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const kakaoCode = await request.json();
    console.log("KaKao_Code : ", kakaoCode);
    return HttpResponse.json({
      info: {
        name: "UserName",
        email: "UserEmail"
      },
      token: {
        access_token: "TestAccessToken",
        refresh_token: "TestRefreshToken",
      }
    });
  }),

  http.get('/api/v1/main/home/categoryList', ({ request }) => {
    return HttpResponse.json({
      data: {
        categoryList: CategoryMap
      }
    })
  }),

  http.get('/api/v1/main/home/topicList', ({ request, params }) => {
    const url = new URL(request.url)
    const categoryId = Number(url.searchParams.get('categoryId'));
    const categoryName = CategoryMap.find(v => v.categoryId === categoryId)?.name;

    return HttpResponse.json(
      {
        data: {
          topicList:
          [
            {topicId:1, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:true},
            {topicId:2, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:3, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:true},
            {topicId:4, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:5, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:6, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:7, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:8, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:9, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:10, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:11, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:12, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:13, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:14, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:15, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:16, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:17, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:18, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:19, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:20, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:21, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:22, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
            {topicId:23, title: `${categoryName}?`, categoryName:`${categoryName}`, summary: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrapped:false},
          ]
        }
      }
    )
  }),


];
