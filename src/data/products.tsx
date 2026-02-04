export interface Product {
  category: string;
  genre: string[];
  title: string;
  authors: string[];
}

export const PRODUCTS: Product[] = [
  {
    category: 'books',
    genre: ['science fiction', "children's"],
    title: 'The Wild Robot',
    authors: ['Peter Brown'],
  },
  {
    category: 'comic books',
    genre: ['science fantasy'],
    title: 'Nimona',
    authors: ['ND Stevenson'],
  },
  {
    category: 'books',
    genre: ['fantasy'],
    title: 'Legends & Lattes',
    authors: ['Travis Baldree'],
  },
  {
    category: 'books',
    genre: ['fantasy'],
    title: 'Bookshops & Bonedust',
    authors: ['Travis Baldree'],
  },
  {
    category: 'books',
    genre: ['science fiction', 'solarpunk'],
    title: 'A Psalm for the Wild-Built',
    authors: ['Becky Chambers'],
  },
  {
    category: 'books',
    genre: ['science fiction', 'solarpunk'],
    title: 'A Prayer for the Crown-Shy',
    authors: ['Becky Chambers'],
  },
];
