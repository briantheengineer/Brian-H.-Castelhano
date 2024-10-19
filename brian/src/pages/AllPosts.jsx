import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Post", summary: "A brief summary of the first post." },
  { id: 2, title: "Second Post", summary: "A brief summary of the second post." },
  // Add more posts as needed
];

function AllPosts() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      {posts.map(post => (
        <article key={post.id} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 mb-4">
          <h2 className="text-2xl font-bold mb-2">
            <Link to={`/post/${post.id}`} className="hover:underline text-primary">{post.title}</Link>
          </h2>
          <p className="text-gray-700">{post.summary}</p>
        </article>
      ))}
    </div>
  );
}

export default AllPosts;
