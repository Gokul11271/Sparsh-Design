import React from "react";

const galleryImages = [
  "https://source.unsplash.com/800x800/?bridal,dress",
  "https://source.unsplash.com/800x800/?wedding,fashion",
  "https://source.unsplash.com/800x800/?boutique,clothing",
  "https://source.unsplash.com/800x800/?indian-wedding",
  "https://source.unsplash.com/800x800/?lehenga",
  "https://source.unsplash.com/800x800/?embroidery,fabric",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-8 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-10"
          style={{ color: "#D68C45" }}
        >
          Boutique Gallery
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          A glimpse into the elegance we create. Each piece is a story of
          craftsmanship and detail.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
