"use client"
import React from "react";

const ServicesData = [
  {
    id: 1,
    span: 'Phase 1',
    img: 'https://www.datocms-assets.com/16499/1591812679-audit.jpg?w=400 ',
    name: "AI Audit",
    description:
      "is a reference book containing word definitions,serves as a valuable tool"
  },
  {
    id: 2,
    span: 'Phase 2',
    img: 'https://www.datocms-assets.com/16499/1591812688-research.jpg?fm=webp&amp;w=1600,',
    name: "Research",
    description:
      "Sharpen your skills with interactive quizzes that reinforce learning.",
  },
  {
    id: 3,
    span: 'Phase 3',
    img: 'https://www.datocms-assets.com/16499/1591812691-strategy.jpg?fm=webp&amp;w=1200 ',
    name: "AI strategy",
    description:
      "Monitor your learning journey with our progress tracking feature. ",
  },
  {
    id: 4,
    span: 'Phase 4',
    img: 'https://www.datocms-assets.com/16499/1591812683-conception.jpg?w=1200',
    name: "AI Conception",
    description:
      "Learning meets fun! Engage in interactive educational games ",
  },
  {
    id: 5,
    span: 'Phase 5',
    img: 'https://www.datocms-assets.com/16499/1591812784-ui.jpg?w=1200',
    name: "Visual and UI design",
    description:
      "Facilitate communication between parents and teachers. ",
  },
  {
    id: 6,
    span: 'Phase 6',
    img: 'https://www.datocms-assets.com/16499/1591812686-qa.jpg?w=800',
    name: "QA and analysis",
    description:
      "Our platform offers multilingual support, ensuring that children ",
  },
];

const Services = () => {
    return (
      <>
        <span id="services"></span>
        <div className="py-10 relative">
          <div className="container mx-auto w-3/5">
          <div className="mb-auto text-center max-w-[400px] mx-auto">
    <h1 className="mt-2 text-4xl font-bold text-black mb-5"> {/* Increased font size to text-6xl */}
        Here's how we make products grow
    </h1>
    <p className="text-sm text-black dark:text-gray-400 mb-2"> {/* Increased font size to text-sm */}
        Our AI design process
    </p>
</div>

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center"> {/* Increased gap to 3 */}
              {ServicesData.map((service) => (
                <button
                  key={service.id}
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="rounded-2xl mb-5 bg-white  relative shadow-xl duration-high group h-[320px] transition-transform hover:-translate-y-2 flex flex-col justify-between" 
                  onClick={() => handleButtonClick(service.id)}
                >
                  <div className="mt-5 h-[240px] w-[240px] flex items-center justify-center overflow-hidden mx-auto"> 
                    <img
                      src={service.img}
                      alt=""
                      className="max-h-full max-w-full transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-5 text-center flex flex-col justify-between flex-grow">
                    <div>
                      <span className="mt-1 text-sm font-bold text-blue-500 mb-1">{service.span}</span>
                      <h1 className="text-xl font-bold mb-1">{service.name}</h1>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      {service.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default Services;
