import { atom } from 'recoil';

const ventAtom = atom({
  key: 'vent',
  default: [
    {
      id: 1,
      name: '매일 아침 당현천에서 조깅하실 분',
      currentMember: 3,
      maxMember: 5,
      location: '서울시 노원구',
      picture:
        'https://mediahub.seoul.go.kr/wp-content/uploads/mediahub/2021/10/pUQBWYkiZXLhTBNUMrdwbgDrImpDfrtm.jpg',
      description:
        '매일 아침 7시에 당현천에서 조깅하실 분을 찾습니다. \n같이 운동하면서 친해져요!',
      isMember: false,
    },
    {
      id: 2,
      name: '판교 스벅에서 모각코해요',
      currentMember: 1,
      maxMember: 4,
      location: '경기도 성남시 분당구',
      picture:
        'https://rimu.work/wp-content/uploads/2023/06/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%ED%9E%90%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-%ED%8C%90%EA%B5%90%EC%97%AD-%EC%99%B8%EA%B4%80.webp',
      description:
        '판교 스벅에서 모각코하실 분을 찾습니다. \n같이 공부하면서 친해져요!',
      isMember: false,
    },
    {
      id: 3,
      name: '같이 토익 공부하실 분',
      currentMember: 1,
      maxMember: 4,
      location: '경기도 용인시 수지구',
      picture:
        'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMDZfMjA3/MDAxNjQxNDY4NTExOTky.rLRMgbfdIhYj0Wm00S3oVrnsTxtqVki89cAqgBD1oJkg.axt-1pQwueJMwuj_vLLGTgP_efneNDl3NmYhhdRFm-Qg.JPEG.jiw1104/IMG_8812.jpg?type=w800',
      description:
        '같이 토익 공부하실 분을 찾습니다. \n끝까지 포기하지 않고 같이 공부해요 !\n같이 공부하면서 친해져요!',
      isMember: true,
    },
  ],
});

export default ventAtom;
