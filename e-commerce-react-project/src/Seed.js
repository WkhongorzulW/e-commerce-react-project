//FIRST PRODUCT LIST
const Menus = [
    {
        title: "Home",
        position: 1,
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
        position: 2,
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
        position: 3,
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
        position: 4,
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
        position: 5,
        children: []
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
        productImage: "images/laptop.png",
        productName: "Tablet & laptop",
        price: "$11,70",
    },
    {
        productImage: "images/play-game.png",
        productName: "Play game",
        price: "$11,70",
    },
    {
        productImage: "images/laptop.png",
        productName: "Tablet & laptop",
        price: "$11,70",
    },
]




export {topProducts, popularProducts, Menus};