// src/pages/Post.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // <-- Must import useParams

const Post = () => {
  // Use useParams to access the dynamic segment :postId
  const { postId } = useParams(); 

  return (
    <div>
      <h2>Dynamic Post Viewer</h2>
      <p>Viewing post with ID: <strong>{postId}</strong></p>
    </div>
  );
};

export default Post;