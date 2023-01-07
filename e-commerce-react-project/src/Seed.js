//FIRST PRODUCT LIST
const contact = [
    {
        help: "Need help? Call us: (+98) 0234 456 789",
        store: "Our store",
        delivery: "Track your order"
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
    }
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
        ]
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
            }
        ]
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
            }
        ]
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
            }
        ]
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
            }
        ]
    },
    {
        title: "About us",
        position: 6,
        children: []
    },
];

const specialProd = [
    {
        title: "EOS 5D IV EF",
        shop: "Shop now",
        view: "View more",
        productImage: "images/5d.webp",
        price: "only $138",
        style: "sliderimg"
    },
    {
        title: "MAXIFY GX 7021",
        shop: "Shop now",
        view: "View more",
        productImage: "images/maxify.webp",
        price: "only $89",
        style: "sliderimg"
    },
    {
        title: "EOS R6 BODY",
        shop: "Shop now",
        view: "View more",
        productImage: "images/r6.webp",
        price: "only $100",
        style: "sliderimg"
    },
]

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
    }
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
]

const popularProducts = [
    {
        productImage: "images/camera.png",
        productName: "Camera",
        price: "$11,70",
    },
    {
        productImage: "images/wireless-headphones.png",
        productName: "Wireless headphones",
        price: "$11.70",
    },
    {
        productImage: "images/wireless-headphones.png",
        productName: "Wireless headphones",
        price: "$11.70",
    },
    {
        productImage: "images/play-game.png",
        productName: "Play game",
        price: "$11,70",
    },
    {
        productImage: "images/play-game.png",
        productName: "Play game",
        price: "$11,70",
    },
    {
        productImage: "images/laptop-pop.png",
        productName: "Tablet & laptop",
        price: "$11,70",
    },
    {
        productImage: "images/play-game.png",
        productName: "Play game",
        price: "$11,70",
    },
    {
        productImage: "images/laptop-pop.png",
        productName: "Tablet & laptop",
        price: "$11,70",
    },
];

const sale = [
    {
        productImage: "images/sale-laptop.png",
        newBtn: "New laptop",
        shopBtn: "Shop now",
        salesPr: "Sale up to 50% off",
        description: "12 inch hd display",
    }
];

const addToCart = [
    {
        productImage: "images/deep-bass.png",
        title: "JBL bar 2.1 deep bass",
        price: "$11,70",
        addBtn: "Add to cart"
    },
];

const threeCards = [
    {
        productImage: "images/play-game-2.png",
        title: "Play game",
        price: "$11,70",
    },
    {
        productImage: "images/laptop.png",
        title: "Laptop",
        price: "$11,70",
    }
];

const about = [
    {
        icon: <i class="bi bi-box-fill"></i>,
        title: "Free delivery",
        text: "on order above $50,00"
    },
    {
        icon: <i class="fa-solid fa-crown"></i>,
        title: "Best quality",
        text: "best quality in low price"
    },
    {
        icon: <i class="bi bi-shield-lock-fill"></i>,
        title: "1 year warranty",
        text: "Available waranty"
    },
]



export {contact, header, specialProd, topProducts, popularCategory, popularProducts, Menus, sale, addToCart, threeCards, about};