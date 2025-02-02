
import React from "react";
import Image from "next/image";

const products= [
  {
    id: 1,
    title: "King Burger",
    category: "Fixing",
    price: "300.00",
    imageUrl: "/images/classic.webp",
    bgColor: "bg-cyan-500",
  },
  {
    id: 2,
    title: "Family Burger",
    category: "Delight",
    price: "500.00",
    imageUrl: "/images/3 burger.webp",
    bgColor: "bg-teal-500",
  },
  {
    id: 3,
    title: "Classic Burger",
    category: "Fixing",
    price: "400.00",
    imageUrl: "/images/classic bite.jpg",
    bgColor: "bg-cyan-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-4 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform duration-300"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "linear-gradient(to bottom, black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.96, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={200}
              height={200}
              className="relative w-50"
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div>
              <span className="block font-semibold text-xl">{product.title}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
