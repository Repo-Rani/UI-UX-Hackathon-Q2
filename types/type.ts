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
  image: string;
  title: string;
  price: string;
  discountPrice?: string;
  sell?: string;
  tag?: string;
  des?: string;
  ratingImage?: string;
  raingNum?: string;
  reviews?: string;
  text?: string;
  bottomDetail?: string;
  bottomDetail2?: string;
}

export interface BlogCardProps {
  id: string;
  image: string;
  title: string;
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
  image: string;
  name: string;
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
