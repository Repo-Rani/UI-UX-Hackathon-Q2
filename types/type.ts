export interface ToggleButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export interface BannerPropsTypes {
  mainHeading: string;
  name: string;
}

export interface StarterMenuProps {
  names: string;
  desc: string;
  text: string;
  price: string;
}

//
export interface ShopCardProps {
  id: string;
  imageUrl: string; 
  name: string;
  description?:string;
  price: string;
  discountPrice?: string;
  sell?: string;
  tags?: string;
  ratingUrl?: string;
  ratingNum?: string;
  reviews?: string;
  text?: string;
  bottomDetail?: string;
  bottomDetail2?: string;
  category?: string;
  img?: string;
  quantity?: number;
  total?: number;
}
export interface BlogCardProps {
  id : string;
  title: string; 
  slug: string; 
  imageUrl: string; 
  detail1?: string; 
  detail2?: string; 
  paragraph1?: string; 
  paragraph2?: string; 
  paragraph3?: string; 
  paragraph4?: string;
  paragraph5?: string;
 
}
export interface MenuCardProps {
  id?: string;
  image: string;
  name: string;
  desc: string;
  price: string;
}

export interface LatestBlogProps {
  image: string;
  title: string;
  date: string;
}

export interface ChefsProps {
  name: string;
  position?: string;
  experience?: number;
  specialty?: string;
  imageUrl:string;
  description?: string;
  available?: boolean;
}

export interface TeamMemberCardsPropsTypes {
  name: string;
  profession: string;
}
export interface FaqProps {
  question: string;
  answer: string;

  image: string;
}

export interface NextArrowsProps {
  onClick: () => void;
}

export interface PrevArrowsProps {
  onClick: () => void;
}

export interface CartProps {
  image: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
  total: number;
}

export interface SliderShopCardProps {
  id: string;
  image:string;
  title: string;
  price: string;
  discountPrice?: string;
  sell?: string;

}
 export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}