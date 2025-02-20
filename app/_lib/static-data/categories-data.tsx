import { PRODUCTS_DATA } from './products-data';

import BABY from '@/app/_assets/temp_categories/baby.svg';
import BAGS from '@/app/_assets/temp_categories/bags.svg';
import BEAUTY from '@/app/_assets/temp_categories/beauty.svg';
import COOKER from '@/app/_assets/temp_categories/cooker.svg';
import DEVICES from '@/app/_assets/temp_categories/devices.svg';
import HEADPHONE from '@/app/_assets/temp_categories/headphone.svg';
import JEWELRY from '@/app/_assets/temp_categories/jewelry.svg';
import MEN from "@/app/_assets/temp_categories/men's-clothing.svg";
import SHOES from '@/app/_assets/temp_categories/shoes.svg';
import SPORTS from '@/app/_assets/temp_categories/sports.svg';
import STAR from '@/app/_assets/temp_categories/star.svg';
import TOY from '@/app/_assets/temp_categories/toy.svg';
import WATCH from '@/app/_assets/temp_categories/watch.svg';
import WOMEN from "@/app/_assets/temp_categories/women's-clothing.svg";
import { ProductType } from '@/app/_types/product.type';
import { StaticImageData } from 'next/image';

export type TempCategoryType = {
  id: string;
  slug: string;
  name: string;
  icon?: StaticImageData | string;
  imageUrl?: string;
  featuredProducts?: ProductType[];
  subCategories?: TempCategoryType[];
  link?: string;
};

export let CATEGORIES_DATA: TempCategoryType[] = [
  {
    id: '1',
    slug: 'featured-categories',
    name: 'Featured Categories',
    icon: STAR,
    featuredProducts: PRODUCTS_DATA,
    link: '/categories/1',
  },
  {
    id: '2',
    slug: 'electronic-devices',
    name: 'Electronic Devices',
    icon: DEVICES,
    imageUrl: 'https://i.ibb.co/zfr39W0/cat6.png',
    featuredProducts: PRODUCTS_DATA,
    link: '/categories/2',
  },
  {
    id: '3',
    slug: 'electronic-accessories',
    name: 'Electronic Accessories',
    icon: HEADPHONE,
    imageUrl: 'https://i.ibb.co/6yyvCQG/cat5.png',
    featuredProducts: [],
    link: '/categories/3',
  },
  {
    id: '4',
    slug: 'watch-accessories',
    name: 'Watch & Accessories',
    icon: WATCH,
    imageUrl: 'https://i.ibb.co/dgf2655/cat1.png',
    featuredProducts: [],
    link: '/categories/4',
  },
  {
    id: '5',
    slug: 'women-clothing',
    name: "Women's Clothing",
    icon: WOMEN,
    imageUrl: 'https://i.ibb.co/fG7XLvQ/cat7.png',
    featuredProducts: [],
    link: '/categories/5',
  },
  {
    id: '6',
    slug: 'men-clothing',
    name: "Men's Clothing",
    icon: MEN,
    imageUrl: 'https://i.ibb.co/MhMLJxV/cat2.png',
    featuredProducts: [],
    link: '/categories/6',
  },
  {
    id: '7',
    slug: 'toys-games',
    name: 'Toys & Games',
    icon: TOY,
    imageUrl: 'https://i.ibb.co/drzpFz6/cat3.png',
    featuredProducts: [],
    link: '/categories/7',
  },
  {
    id: '8',
    slug: 'crookeries-accessories',
    name: 'Crookeries & Accessories',
    icon: COOKER,
    imageUrl: 'https://i.ibb.co/wRBPcZz/cat9.png',
    featuredProducts: [],
    link: '/categories/8',
  },
  {
    id: '9',
    slug: 'baby-maternity',
    name: 'Baby & Maternity',
    icon: BABY,
    imageUrl: 'https://i.ibb.co/4Vh2n20/cat8.png',
    featuredProducts: [],
    link: '/categories/9',
  },
  {
    id: '10',
    slug: 'jewelry-accessories',
    name: 'Jewelry & Accessories',
    icon: JEWELRY,
    imageUrl: 'https://i.ibb.co/MhMLJxV/cat2.png',
    featuredProducts: [],
    link: '/categories/10',
  },
  {
    id: '11',
    slug: 'sports-outdoors',
    name: 'Sports & Outdoors',
    icon: SPORTS,
    imageUrl: 'https://i.ibb.co/fG7XLvQ/cat7.png',
    featuredProducts: [],
    link: '/categories/11',
  },

  {
    id: '12',
    slug: 'beauty-health',
    name: 'Beauty & Health',
    icon: BEAUTY,
    imageUrl: 'https://i.ibb.co/dgf2655/cat1.png',
    featuredProducts: [],
    link: '/categories/12',
  },
  {
    id: '13',
    slug: 'shoes-slippers',
    name: 'Shoes & Slippers',
    icon: SHOES,
    imageUrl:
      'https://i.ibb.co/VtJX39c/0ee77a33777c67424dbb969dc0fe0c73-Expires-1699833600-Signature-ks-AL-2-HQPj-Pty-QDb41-W56-Xqk-CZHNHn.png',
    featuredProducts: PRODUCTS_DATA,
    link: '/categories/13',
  },
  {
    id: '14',
    slug: 'bags-luggage',
    name: 'Bags & Luggage',
    icon: BAGS,
    imageUrl: 'https://i.ibb.co/zfr39W0/cat6.png',
    featuredProducts: PRODUCTS_DATA,
    link: '/categories/14',
  },
];

CATEGORIES_DATA = CATEGORIES_DATA.map((category) => ({ ...category, subCategories: CATEGORIES_DATA.slice(1) }));

export const CATEGORIES_TWO_ROW: TempCategoryType[][] = [
  [
    {
      id: '1',
      slug: 'featured-categories',
      name: "Today's Deals",
      imageUrl:
        'https://i.ibb.co/VtJX39c/0ee77a33777c67424dbb969dc0fe0c73-Expires-1699833600-Signature-ks-AL-2-HQPj-Pty-QDb41-W56-Xqk-CZHNHn.png',
      featuredProducts: PRODUCTS_DATA,
    },
    {
      id: '2',
      slug: 'electronic-devices',
      name: 'Lifestyle & Fitness',
      imageUrl: 'https://i.ibb.co/zfr39W0/cat6.png',
      featuredProducts: PRODUCTS_DATA,
    },
    {
      id: '3',
      slug: 'electronic-accessories',
      name: 'New Arrival',
      imageUrl: 'https://i.ibb.co/6yyvCQG/cat5.png',
      featuredProducts: [],
    },
    {
      id: '4',
      slug: 'watch-accessories',
      name: 'Electronic Devices',
      imageUrl: 'https://i.ibb.co/dgf2655/cat1.png',
      featuredProducts: [],
    },
    {
      id: '5',
      slug: 'women-clothing',
      name: 'Best Sellers',
      imageUrl: 'https://i.ibb.co/fG7XLvQ/cat7.png',
      featuredProducts: [],
    },
    {
      id: '6',
      slug: 'men-clothing',
      name: 'Electronic Accessories',
      imageUrl: 'https://i.ibb.co/MhMLJxV/cat2.png',
      featuredProducts: [],
    },
    {
      id: '7',
      slug: 'toys-games',
      name: 'Watch & Accessories',
      imageUrl: 'https://i.ibb.co/drzpFz6/cat3.png',
      featuredProducts: [],
    },
    {
      id: '8',
      slug: 'crookeries-accessories',
      name: 'Best Sellers',
      imageUrl: 'https://i.ibb.co/wRBPcZz/cat9.png',
      featuredProducts: [],
    },
    {
      id: '9',
      slug: 'baby-maternity',
      name: 'New Arrival',
      imageUrl: 'https://i.ibb.co/4Vh2n20/cat8.png',
      featuredProducts: [],
    },
    {
      id: '10',
      slug: 'jewelry-accessories',
      name: "Today's Deals",
      imageUrl: 'https://i.ibb.co/MhMLJxV/cat2.png',
      featuredProducts: [],
    },
    {
      id: '11',
      slug: 'sports-outdoors',
      name: 'Best Sellers',
      imageUrl: 'https://i.ibb.co/fG7XLvQ/cat7.png',
      featuredProducts: [],
    },
  ],
  [
    {
      id: '15',
      slug: 'beauty-health',
      name: 'Electronic Devices',
      imageUrl: 'https://i.ibb.co/dgf2655/cat1.png',
      featuredProducts: [],
    },
    {
      id: '12',
      slug: 'shoes-slippers',

      name: "Today's Deals",
      imageUrl:
        'https://i.ibb.co/VtJX39c/0ee77a33777c67424dbb969dc0fe0c73-Expires-1699833600-Signature-ks-AL-2-HQPj-Pty-QDb41-W56-Xqk-CZHNHn.png',
      featuredProducts: PRODUCTS_DATA,
    },
    {
      id: '13',
      slug: 'bags-luggage',

      name: 'Lifestyle & Fitness',
      imageUrl: 'https://i.ibb.co/zfr39W0/cat6.png',
      featuredProducts: PRODUCTS_DATA,
    },
    {
      id: '14',
      slug: 'temp',
      name: 'New Arrival',
      imageUrl: 'https://i.ibb.co/6yyvCQG/cat5.png',
      featuredProducts: [],
    },
    {
      id: '17',
      slug: 'temp',
      name: 'Electronic Accessories',
      imageUrl: 'https://i.ibb.co/MhMLJxV/cat2.png',
      featuredProducts: [],
    },
    {
      id: '16',
      slug: 'temp',
      name: 'Best Sellers',
      imageUrl: 'https://i.ibb.co/fG7XLvQ/cat7.png',
      featuredProducts: [],
    },
    {
      id: '20',
      slug: 'temp',
      name: 'New Arrival',
      imageUrl: 'https://i.ibb.co/4Vh2n20/cat8.png',
      featuredProducts: [],
    },
    {
      id: '18',
      slug: 'temp',
      name: 'Watch & Accessories',
      imageUrl: 'https://i.ibb.co/drzpFz6/cat3.png',
      featuredProducts: [],
    },
    {
      id: '19',
      slug: 'temp',
      name: 'Best Sellers',
      imageUrl: 'https://i.ibb.co/wRBPcZz/cat9.png',
      featuredProducts: [],
    },
    {
      id: '22',
      slug: 'temp',
      name: 'Best Sellers',
      imageUrl: 'https://i.ibb.co/fG7XLvQ/cat7.png',
      featuredProducts: [],
    },
    {
      id: '21',
      slug: 'temp',
      name: "Today's Deals",
      imageUrl: 'https://i.ibb.co/MhMLJxV/cat2.png',
      featuredProducts: [],
    },
  ],
];
