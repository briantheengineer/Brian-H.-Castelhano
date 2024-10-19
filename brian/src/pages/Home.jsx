import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Post", summary: "A brief summary of the first post." },
  { id: 2, title: "Second Post", summary: "A brief summary of the second post." },
  // Add more posts as needed
];

function Home() {
  const latestPost = posts[0]; // Get the latest post (first in the array)

  return (
    <div className="space-y-8">
      {/* About Me Section */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          Hi! I'm a passionate writer and developer. I love sharing my thoughts on
          various topics and helping others through my blog. Welcome!
        </p>
      </section>

      {/* Latest Post Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Post</h2>
        <article className="p-6 bg-white rounded-lg shadow mb-4">
          <h3 className="text-xl font-semibold mb-2">
            <Link to={`/post/${latestPost.id}`} className="hover:underline text-primary">
              {latestPost.title}
            </Link>
          </h3>
          <p className="text-gray-700">{latestPost.summary}</p>
        </article>
      </section>
    </div>
  );
}

export default Home;
