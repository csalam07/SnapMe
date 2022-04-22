import React from 'react';

function CreatePost() {
  return (
    <form class="create-post">
      <div class="profile-photo">
        <img src="./images/profile-1.jpg" alt="" />
      </div>
      <input type="text" placeholder="What's on your mind?" id="create-post" />

      <input type="submit" value="Post" class="btn btn-primary" />
    </form>
  );
}

export default CreatePost;
