export const columns = [
  {
    key: '1',
    title: 'Name',
    dataIndex: 'name',
    filters: [
      { text: 'John Brown', value: 'JohnBrown' },
      { text: 'Jim Green', value: 'JimGreen' },
      { text: 'Joe Black', value: 'JoeBlack' },
      { text: 'Jim Red', value: 'JimRed' },
      { text: 'Jim Red', value: 'JimRed' },
      { text: 'Jim Red', value: 'JimRed' },
      { text: 'Jim Red', value: 'JimRed' },
      { text: 'Jim Red', value: 'JimRed' },
    ],
  },
  {
    key: '2',
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: (a: any, b: any) => a.chinese - b.chinese,
  },
  {
    key: '3',
    title: 'Math Score',
    dataIndex: 'math',
    sorter: (a: any, b: any) => a.math - b.math,
  },
  {
    key: '4',
    title: 'English Score',
    dataIndex: 'english',
    sorter: (a: any, b: any) => a.english - b.english,
  },
];
export const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];
