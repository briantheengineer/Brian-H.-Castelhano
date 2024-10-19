import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching the post");
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.Title}</h1>
      <div className="prose text-gray-700">
        {post.Content.map((contentBlock, index) => {
          if (contentBlock.type === 'paragraph') {
            return contentBlock.children.map((child, childIndex) => (
              <p key={childIndex}>{child.text}</p>
            ));
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default PostDetail;
