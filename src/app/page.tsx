
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Progressor from "../components/Progressor";
import ProductList from "../components/Burger";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";
import Burger from "../components/Burger";
import Menu from "../components/MenuItems";










export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white">
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <ProductList/>
      <Banner/>
      <Burger/>
     <Menu />
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>
    </div>
  );
}
