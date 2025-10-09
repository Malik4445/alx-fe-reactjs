// src/pages/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
const BlogPost = () => {
  
  const { postId } = useParams(); 

  return (
    <div>
      <h2>Dynamic Blog Post Viewer</h2>
      <p>Now viewing post with ID: <strong>{postId}</strong></p>
    </div>
  );
};

export default BlogPost;