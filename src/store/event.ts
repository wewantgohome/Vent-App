import { atom } from 'recoil';

const eventAtom = atom({
  key: 'event',
  default: [
    {
      id: 1,
      name: '오레오 인절미맛 인증 이벤트',
      link: 'https://www.oreo.com/',
      picture:
        'https://img.danawa.com/images/descFiles/5/996/4995390_GUWTL71rkT_1646476639355.jpeg',
      description:
        '새로 나온 인절미맛 오레오! 사진을 찍어\n' +
        '벤트에 리뷰해주신 분들 중 10명을 추첨하여\n' +
        '아이패드 프로를 드립니다!\n' +
        '\n' +
        '자세한 사항은 이벤트 링크를 참조해주세요',
      location: '',
      startDate: '2024-01-18',
      endDate: '2024-01-25',
    },
    {
      id: 2,
      name: '뷰티 화장품 리뷰 이벤트',
      link: 'https://www.oreo.com/',
      picture:
        'https://www.btcosmetic.com/data/goodsImages/GOODS2_155590159020190529142831.jpg',
      description:
        '뷰티 화장품 리뷰 이벤트\n' +
        '새로나온 뷰티 화장품 @@@를 사용하고 나서 후기를\n' +
        '작성해주시면 추첨을 통해 3명에게 뷰티 화장품 신제품 3박스를 드립니다\n',
      location: '',
      startDate: '2024-01-18',
      endDate: '2024-01-25',
    },
  ],
});

export default eventAtom;
