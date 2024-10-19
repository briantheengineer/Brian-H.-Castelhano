import React from "react";
import BlogPosts from "./BlogPosts";

const App = () => {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-4xl font-bold text-center">My Blog</h1>
      </header>
      <main>
        <BlogPosts />
      </main>
    </div>
  );
};

export default App;
