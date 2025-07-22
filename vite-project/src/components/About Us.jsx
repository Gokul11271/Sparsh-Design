import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-8 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          style={{ color: "#D68C45" }}
        >
          About Sparsh Ladies Designer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Located in the heart of Coimbatore, Sparsh Ladies Designer is more
          than a boutique— it’s a destination for women seeking elegance,
          tradition, and contemporary design. Our services include bridal wear,
          designer tailoring, embroidery, and premium occasion outfits.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          With over{" "}
          <span className="font-semibold" style={{ color: "#B2834A" }}>
            730+ happy clients
          </span>{" "}
          and an average rating of{" "}
          <span className="font-semibold" style={{ color: "#B2834A" }}>
            4.6 stars
          </span>
          , we’re known for personalized fittings, meticulous craftsmanship, and
          our signature blend of tradition and modern flair.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Visit us at{" "}
          <span className="font-semibold" style={{ color: "#B2834A" }}>
            135 A, Avinashi Rd, Peelamedu, Coimbatore
          </span>
          , just 1.35 km from Pilamedu Railway Station. Discover a boutique
          experience where your story inspires every stitch.
        </p>
      </div>
    </section>
  );
};

export default About;
