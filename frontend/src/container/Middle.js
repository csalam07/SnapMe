import React from 'react';
import CreatePost from '../components/post/CreatePost';
import Posts from '../components/post/Posts';
import Stories from '../components/story/Stories';

function Middle() {
  return (
    <div class="middle">
      <Stories />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default Middle;
