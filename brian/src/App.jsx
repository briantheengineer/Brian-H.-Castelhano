import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Ensure your Navbar component is imported correctly
import MainSection from "./MainSection"; // Your main section component
import BlogPost from "./BlogPost"; // Your full post component

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/posts/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
