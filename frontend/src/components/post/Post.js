import React from 'react';

const LikedBy = ({ image }) => {
  return (
    <span>
      <img src={image} alt="" />
    </span>
  );
};

const database = [
  {
    id: 1,
    image: './images/feed-1.jpg',
  },
  {
    id: 2,
    image: './images/feed-2.jpg',
  },
  {
    id: 3,
    image: './images/feed-3.jpg',
  },
  {
    id: 4,
    image: './images/feed-4.jpg',
  },
];

function Post({ name, avatar, address, date, image, caption, tag }) {
  return (
    <div class="feed">
      <div class="head">
        <div class="user">
          <div class="profile-photo">
            <img src={avatar} alt="" />
          </div>
          <div class="ingo">
            <h3>{name}</h3>
            <small>
              {address}, {date}
            </small>
          </div>
        </div>
        <span class="edit">
          <i class="util uil-ellipsis-h"></i>
        </span>
      </div>
      <div class="photo">
        <img src={image} alt="" />
      </div>
      <div class="action-buttons">
        <div class="interraction-button">
          <span>
            <i class="uil uil-heart"></i>
          </span>
          <span>
            <i class="uil uil-comment-dots"></i>
          </span>
          <span>
            <i class="uil uil-share-alt"></i>
          </span>
        </div>
        <div class="bookmark">
          <span>
            <i class="uil uil-bookmark-full"></i>
          </span>
        </div>
      </div>
      <div class="liked-by">
        <span>
          <img src="./images/profile-10.jpg" alt="" />
        </span>
        <span>
          <img src="./images/profile-4.jpg" alt="" />
        </span>
        <span>
          <img src="./images/profile-15.jpg" alt="" />
        </span>
        <p>
          Liked by <b>Errest Archiver</b> and <b>2,304 others</b>
        </p>
      </div>
      <div class="caption">
        <p>
          {caption}
          <span class="hash-tag"> #{tag} </span>
        </p>
      </div>
      <div class="text-muted comments">View all 277 comments</div>
    </div>
  );
}

export default Post;
