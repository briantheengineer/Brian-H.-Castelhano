import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/posts/${id}`);
        setPost(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching post");
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{post.Title}</h2>
      <div className="prose max-w-none">
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

export default BlogPost;
