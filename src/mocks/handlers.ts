import { http, HttpResponse } from 'msw'

const CategoryMap = [
  {id: 1, name: "주식"},
  {id: 2, name: "펀드"},
  {id: 3, name: "etf"},
  {id: 4, name: "irp"},
  {id: 5, name: "연금"},
  {id: 6, name: "파생상품"},
  {id: 7, name: "test1"},
  {id: 8, name: "test2"},
  {id: 9, name: "test3"},
  {id: 10, name: "test4"},
  {id: 11, name: "test5"},
  {id: 12, name: "test6"},
  {id: 13, name: "test6"},
  {id: 14, name: "test7"},
  {id: 15, name: "test8"},
  {id: 16, name: "test9"},
  {id: 17, name: "test10"},
  {id: 18, name: "test11"},
  {id: 19, name: "test12"},
  {id: 20, name: "test13"},
]

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const kakaoCode = await request.json();
    console.log("KaKao_Code : ", kakaoCode);
    return HttpResponse.json({
      user: {
        name: "UserName",
        email: "UserEmail"
      },
      access_token: "TestAccessToken",
      refresh_token: "TestRefreshToken",
    });
  }),

  http.get('/api/category', ({ request }) => {
    return HttpResponse.json(CategoryMap)
  }),

  http.get('/api/category/:category', ({ request, params }) => {
    const categoryId = Number(params.category);

    const categoryName = CategoryMap.find(v => v.id === categoryId)?.name;

    return HttpResponse.json(
      [
        {id:1, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:true},
        {id:2, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:3, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:true},
        {id:4, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:5, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:6, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:7, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:8, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:9, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:10, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:11, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:12, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:13, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:14, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:15, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:16, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:17, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:18, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:19, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:20, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:21, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:22, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},
        {id:23, title: `${categoryName}?`, category:`${categoryName}`, content: `${categoryName} : 자본회사의 자본을 이루는 어쩌구 저쩌구`, scrap:false},

      ]
    )
  }),


];
