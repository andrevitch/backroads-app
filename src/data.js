import tour1 from "../src/images/tour-1.jpeg";
import tour2 from "../src/images/tour-2.jpeg";
import tour3 from "../src/images/tour-3.jpeg";
import tour4 from "../src/images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: " Lorem ipsum dog sit amet consectetur adipisicing elit.    Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: " Lorem ipsum cat sit amet consectetur adipisicing elit.    Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "China",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    img: tour2,
    date: "august 5th, 2020",
    title: "Beach Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Vietnam",
    duration: "7 days",
    price: "from $1850",
  },
  {
    id: 3,
    img: tour3,
    date: "august 12th, 2020",
    title: "Sea Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Kongo",
    duration: "7 days",
    price: "from $2200",
  },
  {
    id: 1,
    img: tour4,
    date: "august 11th, 2020",
    title: "Japanese Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Japan",
    duration: "3 days",
    price: "from $4100",
  },
];
