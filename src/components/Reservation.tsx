// 'use client'
// import React, { useState } from "react";

// const ReservationSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: "1",
//   });

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     alert("Reservation Submitted!");
//   };

//   return (
//     <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-6">
//       <div className="max-w-lg mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-white mb-8">Make A Reservation</h2>
//         <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg">
//           <div className="mb-5">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Your Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
//               required
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4 mb-5">
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
//               required
//             />
//             <input
//               type="time"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <select
//               name="guests"
//               value={formData.guests}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
//               required
//             >
//               <option value="1">1 Guest</option>
//               <option value="2">2 Guests</option>
//               <option value="3">3 Guests</option>
//               <option value="4">4 Guests</option>
//               <option value="5">5+ Guests</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
//           >
//             Reserve Table
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ReservationSection;
'use client'
import React, { useState } from "react";

// Define types for the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

const ReservationSection = () => {
  // Define the state with type FormData
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
  });

  // Handle change with proper typing for the event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit with proper typing for the event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Reservation Submitted!");
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-6">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-8">Make A Reservation</h2>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>
          <div className="mb-5">
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
          >
            Reserve Table
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
