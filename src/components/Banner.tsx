// import Image from "next/image";
// import React from "react";
// const Banner = () => {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-10 ">
//       <div className="absolute inset-0 opacity-20">
//         <Image
//           src="/images/burger.avif"
//           alt="delicious burger banner"
//           className="w-full h-full object-cover "

//           />
       
//       </div>

//       <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
//         <h2 className="text-white sm:text-5xl font-bold mb-4">
//           Discover Over Menu
//         </h2>
//         <p className="text-white text-lg text-center mb-6 max-w-xl">
//           Shop Now For Exclusive Discount
//         </p>
//         <button
//           type="button"
//           className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300"
//         >
//           Excited Deals Launch at 12pm!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-10 ">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/burger.avif"
          alt="delicious burger banner"
          className="w-full h-full object-cover"
          width={1920}  // specify width here
          height={1080} // specify height here
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now For Exclusive Discounts
        </p>
        <button
          type="button"
          className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300"
        >
          Exciting Deals Launch at 12pm!
        </button>
      </div>
    </div>
  );
};

export default Banner;

