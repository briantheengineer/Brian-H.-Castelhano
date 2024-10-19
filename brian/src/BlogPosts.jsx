import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/posts");
        setPosts(response.data.data); // Access the posts from response.data.data
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id} className="p-6 bg-white rounded-lg shadow mb-4">
          <h2 className="text-2xl font-bold mb-2">{post.Title}</h2>
          <div className="prose">
            {post.Content.map((contentBlock, index) => {
              if (contentBlock.type === 'paragraph') {
                return contentBlock.children.map((child, childIndex) => (
                  <p key={childIndex}>{child.text}</p>
                ));
              }
              return null;
            })}
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;
