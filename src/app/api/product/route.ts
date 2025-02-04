// import { NextResponse } from "next/server";

// export const config = {
//     runtime: 'edge', // Enable Edge Runtime
// };

// export async function GET() {
//     const products = [
//         {
//             id: 1,
//             name: "Fish Burger",
//             price: 499,
//             image: "/images/fish bur.jpg",
//         },
//          {
//             id: 2,
//             name: "Juicy Burger",
//             price: 500,
//             image: "/images/juicy bur.webp",
//         },
//         {
//             id: 3,
//             name: "Loaded Burger",
//             price: 700,
//             image: "/images/loaded.jpg",
//         },
//         {
//             id: 4,
//             name: "Creamy Mayo Burger",
//             price: 600,
//             image: "/images/mayo.webp",
//         },
//         {
//             id: 5,
//             name: "Triplete Burger",
//             price: 800,
//             image: "/images/cherry.jpg",
//         },
//         {
//             id: 6,
//             name: "Zaitoon special Burger",
//             price: 900,
//             image: "/images/bg-6.jpg",
//         },
//         // Other products...
//     ];

//     return  Response.json(products)
// }
import { NextResponse } from "next/server";

export const config = {
    runtime: 'edge', // Enable Edge Runtime
};

export async function GET() {
    const products = [
        {
            id: 1,
            name: "Fish Burger",
            price: 499,
            image: "/images/fish bur.jpg",
        },
        {
            id: 2,
            name: "Juicy Burger",
            price: 500,
            image: "/images/juicy bur.webp",
        },
        {
            id: 3,
            name: "Loaded Burger",
            price: 700,
            image: "/images/loaded.jpg",
        },
        {
            id: 4,
            name: "Creamy Mayo Burger",
            price: 600,
            image: "/images/mayo.webp",
        },
        {
            id: 5,
            name: "Triplete Burger",
            price: 800,
            image: "/images/cherry.jpg",
        },
        {
            id: 6,
            name: "Zaitoon special Burger",
            price: 900,
            image: "/images/bg-6.jpg",
        },
    ];

    return NextResponse.json(products);
}
