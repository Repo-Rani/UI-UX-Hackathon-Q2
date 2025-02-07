import { TypedObject } from "@portabletext/types";


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
  id?: string;
  imageUrl: string;
  name: string;
  description?: string;
  price: number;
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
  createdAt?: string; 
}
export interface BlogCardProps {
  id: string;
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
  imageUrl: string;
  name: string;
  desc: string;
  price: string;
}

export interface LatestBlogProps {
  _id: string;
  image: string;
  title: string;
  date: string;
}

export interface ChefsProps {
  name: string;
  position?: string;
  experience?: number;
  specialty?: string;
  image: string;
  description?: string;
  available?: boolean;
}

export interface TeamMemberCardsPropsTypes {
  name: string;
  profession: string;
}


export interface NextArrowsProps {
  onClick: () => void;
}

export interface PrevArrowsProps {
  onClick: () => void;
}

export interface CartProps {
  id:string;
  imageUrl: string;
  name: string;
  price: number;
  img?: string;
  quantity: number;
  total?: number;
}


export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;

  quantity?: number;
  total?: number;
}

export interface SliderShopCardProps {
  id: string;
  image: string;
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

export interface ProductSuggestion {
  _id: string;
  name: string;
  imageUrl: string;
  _type: string;
  price: number;
}

export interface Testimonial  {
  _id: string;
  name: string;
  image: string;
  desc: string;
  profession: string;
  ratingimage: string;
};

export interface WishlistProductsType {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export interface WishlistItem  {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
  category?: string;
  discountPercent?: number;
  isNew?: boolean;
  ratingReviews?: number;
  offer?: number;
  colors?: string[]; 
  sizes?: string[]; 
};


export interface CartProduct extends ShopCardProps {
  quantity: number;
}

export interface CategorySelectionTypes {
  name: string;
  bgColor: string;
  imgSrc: string;
}
export interface CategorySelectionPropTypes {
  onSelectCategory: (category: string | null) => void;
  activeCategory: string | null;
  selectedCategory: string | null;
}

export interface FoodCategory {
  handleCategoryChange: (category: string, index: number) => void;

}

export interface RangeSliderProps {
  category: string;
  setFilteredProducts: (products: any[]) => void;
  setTotalPages: (totalPages: number) => void;
  currentPage: number;           
  setCurrentPage: (page: number) => void; 
}

export interface ContactFormData {
  name: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface OrderData {
  productId: string;
  productName: string;
  quantity: number;
  totalAmount: number;
  status: string;
  originalPrice: number;
}

export interface Order {
  orderId: string;
  userId: string;
  orderDate: string;
  orderData: OrderData[];
}

export interface ShipmentData {
  orderId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  countryCode: string;
  shippingAddress: string;
  status: string;
  trackingNumber: string;
  shipmentDate: string;
  deliveryDate: string;
  carrier: string;
}

export interface Orders {
  orderId: string;
  productId: string;
  productName: string;
  productPrice: number;
  quantity: number;
}

export interface UserData {
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  address: string;
  order: Orders[];
}

export interface Message {
  user: "User" | "Bot";
  text: string;
}

export interface FaqProps {
  _id: string;
  question: string;
  answer: string;
}

export interface Guide {
  title: string;
  content: TypedObject[]; 
  slug: { current: string };
}

export interface GuideDetailsProps {
  guide: Guide;
  onBack: () => void; 
}
export interface UserPageGuide {
  _id: string;
  title: string;
  content: TypedObject[];
  slug: { current: string };
}

export interface GuideList {
  slug: { current: string };
  title: string;
}
export interface UserGuideListProps {
  guides: GuideList[]; 
  onGuideClick: (guide: GuideList) => void;
}

