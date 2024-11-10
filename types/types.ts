export interface ProductType {
    id: number;
    _id:string;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: Category;
  }
  
  interface Category {
    _id: string;
    id: number;
    name: string;
    image: string;
  }
  
  export interface CategoryType {
    _id: string;
    id: number;
    name: string;
    image: string;
  }