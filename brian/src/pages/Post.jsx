import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const posts = {
  1: { title: "First Post", content: "# This is the first post\n\nThis is the content of the first post." },
  2: { title: "Second Post", content: "# This is the second post\n\nThis is the content of the second post." },
};

function Post() {
  const { id } = useParams();
  const post = posts[id];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <ReactMarkdown className="text-gray-700">{post.content}</ReactMarkdown>
    </div>
  );
}

export default Post;
