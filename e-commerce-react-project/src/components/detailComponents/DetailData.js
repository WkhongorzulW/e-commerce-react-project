let generateId = Math.round(Math.random() * 100);

const playGame = [
  {
    productImage: "images/play-game-detail.png",
    moreImage: "images/play-game.png",
    productName: "Play game",
    price: "$11,70",
  },
];

const siZes = [
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
    addToCart: "Add to cart",
    cartIcon: <i class="fa-solid fa-cart-shopping"></i>,
    viewIcon: <i class="fa-regular fa-eye"></i>,
    viewedIcon: <i class="fa-solid fa-eye"></i>,
    id: { generateId },
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
  },
];

const relatedOther = [
  {
    productImage: "images/wireless-headphones.png",
    productName: "Wireless headphones",
    price: "$11.70",
    id: { generateId },
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
  },
  {
    productImage: "images/play-game.png",
    productName: "Play game",
    price: "$11,70",
    id: { generateId },
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
  },
  {
    productImage: "images/laptop-pop.png",
    productName: "Tablet & laptop",
    price: "$11,70",
    id: { generateId },
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
  },
];

export { playGame, siZes, customer, relatedCam, relatedOther };
