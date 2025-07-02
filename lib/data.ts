import { Room, Review, Recommendation } from './types';

export const roomsData: Room[] = [
  {
    id: 1,
    type: 'Twin Room',
    beds: '2 single beds',
    guests: 2,
    size: 1200,
    price: 282,
    breakfastIncluded: true,
    roomsLeft: 4,
  },
  {
    id: 2,
    type: 'Deluxe Double Room',
    beds: '2 single beds',
    guests: 2,
    size: 1200,
    price: 282,
    breakfastIncluded: true,
    roomsLeft: 4,
  },
    {
    id: 3,
    type: 'Deluxe Double Room',
    beds: '2 single beds',
    guests: 2,
    size: 1200,
    price: 282,
    breakfastIncluded: true,
    roomsLeft: 4,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    quote: "Breathtaking Views and Luxury Comfort!",
    description: "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
    author: "Sofia B.",
    location: "France",
    rating: 5,
  },
  {
    id: 2,
    quote: "Exceptional Stay with Excellent Amenities",
    description: "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
    author: "Youssef R.",
    location: "Morocco",
    rating: 5,
  },
  {
    id: 3,
    quote: "A perfect getaway. The staff was incredibly helpful and the rooms were spotless. Highly recommend!",
    description: "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
    author: "Aisha K.",
    location: "Algeria",
    rating: 5,
  },
  {
    id: 4,
    quote: "Exceptional Stay with Excellent Amenities",
    description: "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
    author: "Youssef R.",
    location: "Morocco",
    rating: 5,
  },
];

export const recommendationsData: Recommendation[] = [
    {
        id: 1,
        name: "Sofitel Algiers Hamma Garden",
        description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
        price: 699,
        bedrooms: 2,
        bathrooms: 2,
        size: 1200,
        rating: 4.5,
        image: "/images/recommendation.jpg"
    },
    {
        id: 2,
        name: "Sofitel Algiers Hamma Garden",
        description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
        price: 699,
        bedrooms: 2,
        bathrooms: 2,
        size: 1200,
        rating: 4.5,
        image: "/images/recommendation.jpg"
    },
    {
        id: 3,
        name: "Sofitel Algiers Hamma Garden",
        description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
        price: 699,
        bedrooms: 2,
        bathrooms: 2,
        size: 1200,
        rating: 4.5,
        image: "/images/recommendation.jpg"
    },
    {
        id: 4,
        name: "Sofitel Algiers Hamma Garden",
        description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
        price: 699,
        bedrooms: 2,
        bathrooms: 2,
        size: 1200,
        rating: 4.5,
        image: "/images/recommendation.jpg"
    },
    {
        id: 5,
        name: "Sofitel Algiers Hamma Garden",
        description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
        price: 699,
        bedrooms: 2,
        bathrooms: 2,
        size: 1200,
        rating: 4.5,
        image: "/images/recommendation.jpg"
    },
    {
        id: 6,
        name: "Sofitel Algiers Hamma Garden",
        description: "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
        price: 699,
        bedrooms: 2,
        bathrooms: 2,
        size: 1200,
        rating: 4.5,
        image: "/images/recommendation.jpg"
    },
];

export const exploreData = {
    restaurants: [
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
    ],
    markets: [
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
    ],
    beaches: [
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
    ],
    transport: [
        { name: "Train - Riverdale Central Station", distance: "1.4 km" },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km" },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km" },
    ],
};