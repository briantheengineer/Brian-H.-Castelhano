import React from "react";
import BlogPosts from "./BlogPost";
import Writer from '/writer.png';

const MainSection = () => {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col justify-center items-center" style={{ minHeight: "calc(100vh - 4rem)" }}>
      {/* About Me Section */}
      <section className="flex flex-col items-center text-center md:flex-row md:text-left mb-12 justify-center md:items-center md:justify-between w-full">
        <div className="md:w-1/2 px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-gray-700">
            I'm a passionate front-end developer, sharing my knowledge and insights through blog posts. Stay tuned for the latest updates!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center px-4 mt-8 md:mt-0">
          <div className="rounded-full bg-gray-200 w-72 h-72 border-4 border-[#1CA857] overflow-hidden">
            <img src={Writer} alt="About me" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Latest Blog Post Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Latest Blog Post</h2>
        <BlogPosts />
      </section>
    </main>
  );
};

export default MainSection;
