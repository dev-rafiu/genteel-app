export const PRODUCTS = {
  recommended: [
    {
      id: 1,
      name: "Gem Glow",
      imgUrl: require("@/assets/images/home/recommend-img01.png"),
      description: "High Waisted Shorts",
      price: 20,
    },

    {
      id: 2,
      name: "ZARA",
      imgUrl: require("@/assets/images/home/recommend-img02.png"),
      description: "Strapless Corset Bustier Top",
      price: 25,
    },
  ],

  inStock: [
    {
      id: 101,
      name: "Lux Band",
      imgUrl: require("@/assets/images/home/stock-img01.png"),
      description: "Elegance wrapped handbag",
      price: 40,
    },
    {
      id: 102,
      name: "Prada",
      imgUrl: require("@/assets/images/home/stock-img02.png"),
      description: "Tiered Mini Dress",
      price: 55,
    },
  ],

  featured: [
    {
      id: 101,
      name: "Radiant Ring",
      imgUrl: require("@/assets/images/home/featured-img01.png"),
      description: "Shine like diamond",
      price: 300,
    },
    {
      id: 102,
      name: "Lamerei",
      imgUrl: require("@/assets/images/home/featured-img02.png"),
      description: "Reversible Angora Sweater",
      price: 60,
    },
  ],

  collections: [
    { id: 1, imgUrl: require("@/assets/images/home/collections-img01.png") },
  ],

  cart: [
    {
      id: 1,
      name: "Shawl Rounded Collar Blazer",
      imgUrl: require("@/assets/images/catalog/products/shawl-collar.png"),
      price: 150,
      color: "#9CAF88", // sage green
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      name: "Single-Breasted Clean Cut Blazer",
      imgUrl: require("@/assets/images/catalog/products/single-breasted.png"),
      price: 120,
      originalPrice: 150,
      color: "#A8D5E2", // light blue
      size: "M",
      quantity: 1,
    },
    {
      id: 3,
      name: "Cute Strip Pouch Handbag",
      imgUrl: require("@/assets/images/home/stock-img01.png"), // Using Lux Band handbag image
      price: 100,
      color: "#D4C4A8", // light tan/beige
      size: "L",
      quantity: 1,
    },
  ],

  favorites: [
    {
      id: 1,
      name: "Gem Glow",
      imgUrl: require("@/assets/images/home/recommend-img01.png"),
      description: "High Waisted Shorts",
      price: 100,
    },
    {
      id: 2,
      name: "Prada",
      imgUrl: require("@/assets/images/home/stock-img01.png"),
      description: "Elegance Mini handbag",
      price: 240,
    },
    {
      id: 3,
      name: "Lux Luxury",
      imgUrl: require("@/assets/images/home/featured-img01.png"),
      description: "High Heels Shoes",
      price: 180,
    },
    {
      id: 4,
      name: "Lamerei",
      imgUrl: require("@/assets/images/home/featured-img02.png"),
      description: "Reversible Angora Sweater",
      price: 60,
    },
  ],
};
