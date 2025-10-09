// src/pages/Post.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  // Use useParams to access the dynamic segment
  const { postId } = useParams(); 

  return (
    <div>
      <h2>Dynamic Post Viewer</h2>
      <p>Now viewing post with ID: <strong>{postId}</strong></p>
      <p>This demonstrates dynamic routing (e.g., /post/1, /post/my-article).</p>
    </div>
  );
};

export default Post;