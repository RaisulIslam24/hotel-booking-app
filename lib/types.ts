export interface Room {
  id: number;
  type: string;
  beds: string;
  guests: number;
  size: number;
  price: number;
  breakfastIncluded: boolean;
  roomsLeft: number;
}

export interface Review {
  id: number;
  quote: string;
  description: string;
  author: string;
  location: string;
  rating: number;
}

export interface Recommendation {
  id: number;
  name: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  rating: number;
  image: string;
}