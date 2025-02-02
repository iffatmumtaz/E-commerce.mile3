import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row item-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white ">
          Delicious Burgers
        </h2>
        <p className="text-white mb-4">
          Experiance the juiciest burgers in town, made with fresh ingredients
          and grilled to perfection
        </p>
        <button className="bg-green-500 text-white px-4 py-4 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          Comming Soon: Our New Burger Launched
        </h3>
        <ul>
          <li>
            <strong>Cheesy BBQ Bacon Burgur:</strong>A mouthwatering blend of
            chedder cheese, crispy bacon, and BBQ..
          </li>
          <br />

          <li>
            <strong>Smoky BBQ Chicken Burger:</strong>
            Grilled chicken topped with smoky BBQ sauce, cheddar cheese, and
            crispy onion rings..
          </li>
          <br />

          <li>
            <strong>Loaded Mushroom Swiss Burger:</strong>A savory delight
            featuring Swiss cheese, sautéed mushrooms, and creamy garlic aioli..
          </li>
          <br />

          <li>
            <strong>Classic American Cheeseburger:</strong>A timeless favorite
            with melted American cheese, crisp lettuce, and a juicy beef patty..
          </li>
          <br />

          <li>
            <strong>Spicy Jalapeño Burger:</strong>A fiery combination of pepper
            jack cheese, fresh jalapeños, and zesty chipotle sauce..
          </li>
          <br />
        </ul>
      </div>
      <div className=" md:w-1/2 mt-6 md:mt-0">
        <img
          src="/images/restar.avif"
          alt="delicious burger"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};
export default FloatingImageContentBlock;
