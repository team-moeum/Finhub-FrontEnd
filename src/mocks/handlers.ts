import { http, HttpResponse } from 'msw'


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


];
