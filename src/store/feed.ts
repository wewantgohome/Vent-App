import { atom } from 'recoil';

const feedAtom = atom({
  key: 'feed',
  default: [
    {
      id: 1,
      eventId: 1,
      content: '오레오 이벤트 인증해욤^^',
      picture:
        'https://blog.kakaocdn.net/dn/LcOMW/btrIH7uB7hY/E3oRSa1gMjsKAp9Zwq7uOK/img.jpg',
      author: '김민교',
      createdAt: '2024-01-18',
      isMine: false,
    },
  ],
});

export default feedAtom;
