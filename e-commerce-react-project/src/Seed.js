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
        title: "Canon camera",
        shop: "Shop now",
        view: "View more",
        productImage: "images/canon.png",
        price: "only $89"
    }
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



export {contact, header, specialProd, topProducts, popularProducts, Menus, sale};