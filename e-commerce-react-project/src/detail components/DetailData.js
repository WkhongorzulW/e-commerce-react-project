const playGame = [
  {
    productImage: "images/play-game-detail.png",
    moreImage: "images/play-game.png",
    productName: "Play game",
    price: "$11,70",
    review: "No reviews",
    available: "Availability: ",
    inStock: "In stock",
    items: "Hurry up only 34 products left in stock",
    color: "Color",
    colorCircle: <i class="fa-solid fa-circle"></i>,
    size: "Size",
    sizes: [
      {
        si: 30,
      },
      {
        si: 56,
      },
      {
        si: 42,
      },
      {
        si: 48,
      },
    ],
    quantity: 1,
    addBtn: "Add to cart",
    buyBtn: "Buy it now",
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    sku: 01133 - 9 - 9,
    category: "20% off, 40% off Alex remote",
    share: "images/social.png",
    descBtn: "Description",
    revBtn: "Review",
  },
];

const customer = [
  {
    title: "Customer reviews",
    rev: "No reviews yet",
    revBtn: "Write a review",
  },
];

const relatedCam = [
  {
    productImage: "images/camera.png",
    productName: "Camera",
    addToCart: "Add to cart",
    cartIcon: <i class="fa-solid fa-cart-shopping"></i>,
    viewIcon: <i class="fa-regular fa-eye"></i>,
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
  },
];

const related = [
  {
    productImage: "images/wireless-headphones.png",
    productName: "Wireless headphones",
    price: "$11.70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
  },
  {
    productImage: "images/play-game.png",
    productName: "Play game",
    price: "$11,70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
  },
  {
    productImage: "images/laptop-pop.png",
    productName: "Tablet & laptop",
    price: "$11,70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
  },
];

export { playGame, customer, related, relatedCam };
