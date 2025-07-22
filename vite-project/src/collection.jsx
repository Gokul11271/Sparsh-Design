import React from "react";

const collections = [
  {
    title: "Bridal Couture",
    description:
      "Handcrafted wedding lehengas & sarees designed for your big day.",
    image: "/bridal.jpg", // Replace with your image paths
  },
  {
    title: "Festive Wear",
    description:
      "Festive sarees, party gowns & ethnic sets for graceful occasions.",
    image: "/festive.jpg",
  },
  {
    title: "Everyday Elegance",
    description:
      "Minimal designer wear for daily grace and subtle statement looks.",
    image: "/everyday.jpg",
  },
  {
    title: "Accessories",
    description:
      "Curated jewelry, clutches & handcrafted accessories to complete your look.",
    image: "/accessories.jpg",
  },
];

const Collection = () => {
  return (
    <section id="collection" className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-10"
          style={{ color: "#D68C45" }}
        >
          Our Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-[#FAF7F2]">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#D68C45" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
