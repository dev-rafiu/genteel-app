export type TSlide = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const ONBOARDING_SLIDES = [
  {
    id: 1,
    title: "Explore Our World",
    description:
      "Find the cleanest and hottest styles from the brands you love",
    image: require("@/assets/images/onboarding/slide1.jpg"),
  },
  {
    id: 2,
    title: "AI Integration",
    description:
      "Input clothing keywords or styles for AI-powered recommendations",
    image: require("@/assets/images/onboarding/slide2.png"),
  },

  {
    id: 3,
    title: "Happy Shopping",
    description:
      "It’s time to experience over thousands of stylish products in Genteel",
    image: require("@/assets/images/onboarding/slide3.jpg"),
  },
];
