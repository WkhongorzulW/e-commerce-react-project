function generateId() {
  return Math.floor((Math.random() * 100));
}

const signUp = [
  {
    title: "Sign up",
    nameLab: "Name*",
    name: "Enter your name",
    emailLab: "Email*",
    email: "Enter your email",
    passLab: "Password*",
    pass: "Create a password",
    must: "Must be at least 8 characters.",
    btn: "Create account",
    question: "Already have an account?",
    logIn: "Log in",
  }
];

const logIn = [
  {
    title: "Log in",
    nameLab: "Name*",
    name: "Enter your name",
    emailLab: "Email*",
    email: "Enter your email",
    passLab: "Password*",
    pass: "Enter your password",
    logIn: "Log in"
  }
]

const contact = [
  {
    help: "Need help? Call us: (+98) 0234 456 789",
    store: "Our store",
    delivery: "Track your order",
  },
];

const header = [
  {
    eLogo: "images/e-logo.png",
    searchInput: "Search any things",
    search: "Search",
    signIn: "Sign in",
    fav: 0,
    basket: 0,
  },
];

const Menus = [
  {
    title: "Browse categories",
    position: 1,
    children: [
      {
        title: "Camera",
        position: 1,
      },
      {
        title: "Speaker",
        position: 2,
      },
      {
        title: "Desktop & Laptop",
        position: 3,
      },
      {
        title: "Headphones",
        position: 4,
      },
      {
        title: "Play game",
        position: 5,
      },
    ],
  },
  {
    title: "Home",
    position: 2,
    children: [
      {
        title: "Home child 1",
        position: 1,
      },
      {
        title: "Home child 2",
        position: 2,
      },
    ],
  },
  {
    title: "Catalog",
    position: 3,
    children: [
      {
        title: "Catalog child 1",
        position: 1,
      },
      {
        title: "Catalog child 2",
        position: 2,
      },
    ],
  },
  {
    title: "Blog",
    position: 4,
    children: [
      {
        title: "Blog child 1",
        position: 1,
      },
      {
        title: "Blog child 2",
        position: 2,
      },
    ],
  },
  {
    title: "Pages",
    position: 5,
    children: [
      {
        title: "Pages child 1",
        position: 1,
      },
      {
        title: "Pages child 2",
        position: 2,
      },
    ],
  },
  {
    title: "About us",
    position: 6,
    children: [],
  },
  {
    title: "30 Days Free Return",
    position: 7,
    children: [],
  }
];

const specialProd = [
  {
    title: "EOS 5D IV EF",
    shop: "Shop now",
    view: "View more",
    productImage: "images/5d.webp",
    price: "only $138",
    style: "sliderimg",
  },
  {
    title: "MAXIFY GX 7021",
    shop: "Shop now",
    view: "View more",
    productImage: "images/maxify.webp",
    price: "only $89",
    style: "sliderimg",
  },
  {
    title: "EOS R6 BODY",
    shop: "Shop now",
    view: "View more",
    productImage: "images/r6.webp",
    price: "only $100",
    style: "sliderimg",
  },
];

const topProducts = [
  {
    productImage: "images/speaker.png",
    productName: "Speaker",
    items: "(6 items)",
  },
  {
    productImage: "images/laptop.png",
    productName: "Desktop & Laptop",
    items: "(6 items)",
  },
  {
    productImage: "images/dslr-camera.png",
    productName: "Dslr camera",
    items: "(6 items)",
  },
];

const popularCategory = [
  {
    title: "Cameras",
    position: 1,
  },
  {
    title: "Laptops",
    position: 2,
  },
  {
    title: "Tablets",
    position: 3,
  },
  {
    title: "Mouse",
    position: 4,
  },
];

const popularProducts = [
  {
    productImage: "images/camera.png",
    productName: "Camera",
    price: "$11,70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    cart: <i class="fa-solid fa-cart-shopping text-white"></i>,
  },
  {
    productImage: "images/wireless-headphones.png",
    productName: "Wireless headphones",
    price: "$11.70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    cart: <i class="fa-solid fa-cart-shopping text-white"></i>,
  },
  {
    productImage: "images/wireless-headphones.png",
    productName: "Wireless headphones",
    price: "$11.70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    cart: <i class="fa-solid fa-cart-shopping text-white"></i>,
  },
  {
    productImage: "images/play-game.png",
    productName: "Play game",
    price: "$11,70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    cart: <i class="fa-solid fa-cart-shopping text-white"></i>,
  },
  {
    productImage: "images/play-game.png",
    productName: "Play game",
    price: "$11,70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    cart: <i class="fa-solid fa-cart-shopping text-white"></i>,
  },
  {
    productImage: "images/laptop-pop.png",
    productName: "Tablet & laptop",
    price: "$11,70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    cart: <i class="fa-solid fa-cart-shopping text-white"></i>,
  },
  {
    productImage: "images/play-game.png",
    productName: "Play game",
    price: "$11,70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    cart: <i class="fa-solid fa-cart-shopping text-white"></i>,
  },
  {
    productImage: "images/laptop-pop.png",
    productName: "Tablet & laptop",
    price: "$11,70",
    id: generateId(),
    heart: <i class="fa-regular fa-heart"></i>,
    fullHeart: <i class="fa-solid fa-heart"></i>,
    cart: <i class="fa-solid fa-cart-shopping text-white"></i>,
  },
];

const sale = [
  {
    productImage: "images/sale-laptop.png",
    newBtn: "New laptop",
    shopBtn: "Shop now",
    salesPr: "Sale up to 50% off",
    description: "12 inch hd display",
  },
];

const addToCart = [
  {
    productImage: "images/deep-bass.png",
    title: "JBL bar 2.1 deep bass",
    price: "$11,70",
    addBtn: "Add to cart",
  },
];

const threeCards = [
  {
    productImage: "images/play-game.png",
    title: "Play game",
    price: "$11,70",
  },
  {
    productImage: "images/laptop.png",
    title: "Laptop",
    price: "$11,70",
  },
];

const about = [
  {
    icon: <i class="bi bi-box-fill"></i>,
    title: "Free delivery",
    text: "on order above $50,00",
  },
  {
    icon: <i class="fa-solid fa-crown"></i>,
    title: "Best quality",
    text: "best quality in low price",
  },
  {
    icon: <i class="bi bi-shield-lock-fill"></i>,
    title: "1 year warranty",
    text: "Available waranty",
  },
];

const users = [
  {
    userImage: "images/user1.png",
    userName: "Savannah Nguyen",
    userComment:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
  {
    userImage: "images/user2.png",
    userName: "Esther Howard",
    userComment:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
  {
    userImage: "images/user3.png",
    userName: "Dylian Howard",
    userComment:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
  },
];

const brands = [
  {
    brandLogo: "images/brand-1.png",
  },
  {
    brandLogo: "images/brand-2.png",
  },
  {
    brandLogo: "images/brand-3.png",
  },
  {
    brandLogo: "images/brand-4.png",
  },
  {
    brandLogo: "images/brand-5.png",
  },
];

const latest = [
  {
    productImage: "images/blog1.png",
    date: "22 oct 2021",
    title: "Who avoids a pain that produces?",
    text: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    source: "By spacing tech",
  },
  {
    productImage: "images/blog2.png",
    date: "22 oct 2021",
    title: "Who avoids a pain that produces?",
    text: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    source: "By spacing tech",
  },
];

const footerTop = [
  {
    title: "Subscribe newsletter",
    email: "Email address",
    emailIcon: <i class="fa-regular fa-paper-plane"></i>,
    hPhoneIcon: <i class="fa-solid fa-headphones-simple"></i>,
    text: "Call us 24/7:",
    phNumber: "(+62)0123 567 789",
  },
];

const mainFooter = [
  {
    logo: "images/logo-footer.png",
    address: "64 st james boulevard hoswick, ze2 7zj",
    social: "images/social.png",
    // google: <i class="fa-brands fa-google"></i>,
    // fb: <i class="fa-brands fa-facebook"></i>,
    // call: <i class="fa-regular fa-circle-phone"></i>,
  },
];

const footerChildren = [
  {
    header: "Find product",
    data: [
      {
        title: "Brownze arnold",
      },
      {
        title: "Chronograph blue",
      },
      {
        title: "Smart phones",
      },
      {
        title: "Automatic watch",
      },
      {
        title: "Hair straighteners",
      },
    ]
  },
  {
    header: "Get help",
    data: [
      {
        title: "About us",
      },
      {
        title: "Contact us",
      },
      {
        title: "Return policy",
      },
      {
        title: "Privacy policy",
      },
      {
        title: "Payment policy",
      },
    ]
  },
  {
    header: "About us",
    data: [
      {
        title: "News",
      },
      {
        title: "Service",
      },
      {
        title: "Our policy",
      },
      {
        title: "Customer care",
      },
      {
        title: "Faq's",
      },
    ]
  }
    
];

export {
  signUp,
  logIn,
  contact,
  header,
  specialProd,
  topProducts,
  popularCategory,
  popularProducts,
  Menus,
  sale,
  addToCart,
  threeCards,
  about,
  users,
  brands,
  latest,
  footerTop,
  mainFooter,
  footerChildren,
};
