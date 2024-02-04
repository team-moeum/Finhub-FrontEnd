import {http, HttpResponse, StrictResponse} from 'msw'

const User = [
  {id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg'},
  {id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg'},
]
const Posts = [];

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    })
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  }),
  http.post('/api/users', async ({ request }) => {
    console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
      }
    })
  }),
 
  http.get('/api/users/:userId', ({ request, params }): StrictResponse<any> => {
    const {userId} = params;
    const found = User.find((v) => v.id === userId);
    if (found) {
      return HttpResponse.json(
        found,
      );
    }
    return HttpResponse.json({ message: 'no_such_user' }, {
      status: 404,
    })
  }),
  
  http.get('/api/followRecommends', ({ request}) => {
    return HttpResponse.json(User);
  }),
  http.get('/api/trends', ({ request }) => {
    return HttpResponse.json(
      [
        {tagId: 1, title: '제로초', count: 1264},
        {tagId: 2, title: '원초', count: 1264},
        {tagId: 3, title: '투초', count: 1264},
        {tagId: 4, title: '쓰리초', count: 1264},
        {tagId: 5, title: '포초', count: 1264},
        {tagId: 6, title: '파이브초', count: 1264},
        {tagId: 7, title: '식스초', count: 1264},
        {tagId: 8, title: '세븐초', count: 1264},
        {tagId: 9, title: '나인초', count: 1264},
      ]
    )
  }),
];
