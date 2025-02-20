export type BestsellerType = {
  id: string;
  title: string;
  products: { id: string; thumbnailUrl: string }[];
};

export const BESTSELLERS_DATA: BestsellerType[] = [
  {
    id: '1',
    title: 'Cell Phones & Accessories',
    products: [
      { id: '1.1', thumbnailUrl: 'https://i.ibb.co/2KS0Ck8/prod1.png' },
      { id: '1.2', thumbnailUrl: 'https://i.ibb.co/d4rtfch/prod2.png' },
      { id: '1.3', thumbnailUrl: 'https://i.ibb.co/2KS0Ck8/prod1.png' },
      { id: '1.4', thumbnailUrl: 'https://i.ibb.co/d4rtfch/prod2.png' },
    ],
  },
  {
    id: '2',
    title: 'Jewelry & Accessories',
    products: [
      { id: '2.1', thumbnailUrl: 'https://i.ibb.co/yNtD3hs/prod4-1.png' },
      { id: '2.2', thumbnailUrl: 'https://i.ibb.co/FB0p09m/prod4-2.png' },
      { id: '2.3', thumbnailUrl: 'https://i.ibb.co/tzPrNrc/prod4-3.png' },
      { id: '2.4', thumbnailUrl: 'https://i.ibb.co/ctL5g17/prod4-4.png' },
    ],
  },
  {
    id: '3',
    title: 'Earbuds & Accessories',
    products: [
      { id: '3.1', thumbnailUrl: 'https://i.ibb.co/t4ykgZx/prod3-1.png' },
      { id: '3.2', thumbnailUrl: 'https://i.ibb.co/7VzVK70/prod3-2.png' },
      { id: '3.3', thumbnailUrl: 'https://i.ibb.co/6vjjwzn/prod3-3.png' },
      { id: '3.4', thumbnailUrl: 'https://i.ibb.co/02Chxjd/prod3-4.png' },
    ],
  },
  {
    id: '4',
    title: "Men's Watches",
    products: [
      { id: '4.1', thumbnailUrl: 'https://i.ibb.co/yNtD3hs/prod4-1.png' },
      { id: '4.2', thumbnailUrl: 'https://i.ibb.co/FB0p09m/prod4-2.png' },
      { id: '4.3', thumbnailUrl: 'https://i.ibb.co/tzPrNrc/prod4-3.png' },
      { id: '4.4', thumbnailUrl: 'https://i.ibb.co/ctL5g17/prod4-4.png' },
    ],
  },
];
