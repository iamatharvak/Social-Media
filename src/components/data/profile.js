import image from "../images/1.jpg";
import image1 from "../images/abc.jpeg";
import image2 from "../images/xyz.jpeg";
import image3 from "../images/srk.jpeg";
export const profiles = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    location: "New York, USA",
    description: "Love outdoor adventures and photography. Let's connect!",
    photo: image,
    gallery: [image1, image2, image3],
    interests: ["Hiking", "Photography", "Music"],
    coordinates: { lat: 18.506048, lng: 73.804943 },
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 24,
    location: "Los Angeles, USA",
    description: "Fitness enthusiast, book lover, and foodie.",
    photo: "jane_photo_url",
    gallery: ["image4_url", "image5_url", "image6_url"],
    interests: ["Fitness", "Books", "Food"],
  },
];
