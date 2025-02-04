// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10 px-5">
//       <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
//         {/* Navigation Links */}
//         <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
//           <a className="hover:text-cyan-400" href="#">Home</a>
//           <a className="hover:text-cyan-400" href="#">About</a>
//           <a className="hover:text-cyan-400" href="#">Delivery</a>
//           <a className="hover:text-cyan-400" href="#">Contact</a>
//         </nav>

//         {/* Social Icons */}
//         <div className="flex space-x-5">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/3d-fluency/48/instagram-logo.png" alt="Instagram" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/color/48/twitterx.png" alt="Twitter" />
//           </a>
//         </div>
//       </div>

//       {/* Subscribe Section */}
//       <div className="mt-8 text-center">
//         <h3 className="text-lg font-semibold text-cyan-400">Subscribe to Our Newsletter</h3>
//         <form className="mt-4 flex justify-center">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-2 rounded-l-lg border-none outline-none text-gray-900"
//           />
//           <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-r-lg text-white">
//             Subscribe
//           </button>
//         </form>
//       </div>

//       {/* Copyright */}
//       <p className="text-center text-gray-400 text-sm mt-6">
//         &copy; 2024 Iffat Mumtaz. All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
          <a className="hover:text-cyan-400" href="#">Home</a>
          <a className="hover:text-cyan-400" href="#">About</a>
          <a className="hover:text-cyan-400" href="#">Delivery</a>
          <a className="hover:text-cyan-400" href="#">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" width={48} height={48} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" width={48} height={48} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/3d-fluency/48/instagram-logo.png" alt="Instagram" width={48} height={48} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/color/48/twitterx.png" alt="Twitter" width={48} height={48} />
          </a>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold text-cyan-400">Subscribe to Our Newsletter</h3>
        <form className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg border-none outline-none text-gray-900"
          />
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-r-lg text-white">
            Subscribe
          </button>
        </form>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm mt-6">
        &copy; 2024 Iffat Mumtaz. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

