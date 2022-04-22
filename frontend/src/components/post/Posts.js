import Post from './Post';

function Posts() {
  return (
    <div class="feeds">
      <Post
        avatar="/images/profile-11.jpg"
        name="Lana Rhodes"
        address="Bubai"
        date="15 MINUTES AGO"
        image="/images/feed-1.jpg"
        caption="Lana Rhodes is a professional photographer and she is a videographer based in London, UK."
        tag="photgraphy"
      />
    </div>
  );
}

export default Posts;
