// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import ProductCard from "./ProductCard";

// const Menu = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [isCheckOut, setISCheckOut] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await fetch("/api/product", {
//           method: "GET",
//         });
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
  
//         const data = await response.json(); // Read the response body once.
//         console.log(`Data: ${JSON.stringify(data)}`); // Log the parsed data.
//         setProducts(data); // Assuming `data` is in the format you expect.
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }
  
//     fetchProducts();
//     //local storage
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart, product];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//     // CART VISIBIITY
//   };
//     const toggleCart = () => {
//       setShowCart((prev) => !prev);
//     };
//     //CHECKOUT MODEL
//     const goToCheckOut = () => {
//       setISCheckOut(true);
//     };

//     //CART CLEAR METHOD

//     const clearCart = () => {
//       setCart([]);
//       localStorage.removeItem("cart");
//     };
//     return (
//       <div className="relative min-h-screen py-6">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
//           style={{
//             backgroundImage: "/images/background.jpg",
//           }}
//         ></div>
//         <div className="relative z-10">
//           <div className="max-w-6xl mx-auto text-center mb-8">
//             <h1 className="text-4xl font-bold text-white mb-4">
//               Delicious Burger In Our MEnu
//             </h1>
//             <p>Explore Our Section Of Mouthwatering Burgers tO ORDER NOW!</p>
//           </div>
//           {/* //product section */}
//           <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
//             {products.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 {...product}
//                 onAddToCart={addToCart}
//               />
//             ))}
//           </div>
//           {/* cart section  */}
//           <div className="max-w-6xl mx-auto mt-8">
//             <button
//               onClick={toggleCart}
//               className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
//             >
//               {showCart ? "Hide Card" : "VeiwCart"} ({cart.length} items)
//             </button>

//             {showCart && (
//               <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//                 <h2 className="text-4xl font-bold mb-4 text-blue-600">
//                   Your Cart items Includes:
//                 </h2>
//                 {cart.length > 0 ? (
//                   <div>
//                     <ul>
//                       {cart.map((product, index) => (
//                         <li
//                           key={index}
//                           className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
//                         >
//                           <Image
//                             src={product.image}
//                             alt={product.name}
//                             className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform hover:scale-105 text-black"
//                           />
//                           <span className="ml-4 text-lg font-medium text-slate-600">
//                             {product.name} - ${product.price}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="flex justify-between items-center mt-6 text-black">
//                       <span className="font-semibold text-xl ">
//                         Total: $
//                         {cart.reduce(
//                           (total, product) => total + product.price,
//                           0
//                         )}
//                       </span>

//                       <div>
//                         <button
//                           onClick={goToCheckOut}
//                           className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
//                         >
//                           Proceed To Checkout
//                         </button>

//                         <button
//                           onClick={clearCart}
//                           className="bg-red-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
//                         >
//                           Clear Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="text-lg text-slate-600 ">Your cart is empty</p>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* checkout section */}
//           {isCheckOut && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center item-ceter z-50 text-black">
//               <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
//                 <h2 className="text-4xl font-bold text-blue-600 mb-4">
//                   Checkout
//                 </h2>
//                 <p className="text-lg text-red-600 ">
//                   {" "}
//                   Please confirm your order before proceeding
//                 </p>
//                 <div className="mt-4 ">
//                   <ul>
//                     {cart.map((product, index) => (
//                       <li key={index} className="flex justify-between mb-4">
//                         <span>{product.name}</span>
//                         <span>{product.price}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="flex justify-between mt-4">
//                     <span className="font-semibold">Total:</span>
//                     <span className="font-semibold">
//                       $
//                       {cart.reduce(
//                         (total, product) => total + product.price,
//                         0
//                       )}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex justify-between">
// <button onClick={() => setISCheckOut(false)}
// className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-600 transition duration-300">
// Closed
// </button>

// <button onClick={()=> alert ('Order Confirm.. Will Deliver At Your Door Step!')}
//   className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-600 transition duration-300">

//   Confirmed Order
// </button>

//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );

// };

// export default Menu;
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// Define Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckOut, setISCheckOut] = useState(false);

  useEffect(() => {
    // Fetch products from API
    async function fetchProducts() {
      try {
        const response = await fetch("/api/product", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();

    // Check if cart exists in localStorage and set it
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckOut = () => {
    setISCheckOut(true);
  };

  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage: "/images/background.jpg",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Delicious Burger In Our Menu
          </h1>
          <p>Explore Our Section Of Mouthwatering Burgers To Order Now!</p>
        </div>
        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">
                Your Cart Items Include:
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform hover:scale-105 text-black"
                          width={96}
                          height={192}
                        />
                        <span className="ml-4 text-lg font-medium text-slate-600">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>

                    <div>
                      <button
                        onClick={goToCheckOut}
                        className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="bg-red-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-600">Your cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {isCheckOut && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                Checkout
              </h2>
              <p className="text-lg text-red-600">
                Please confirm your order before proceeding
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>{product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">
                    $
                    {cart.reduce(
                      (total, product) => total + product.price,
                      0
                    )}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setISCheckOut(false)}
                  className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-600 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    alert("Order Confirmed.. Will Deliver At Your Door Step!")
                  }
                  className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
