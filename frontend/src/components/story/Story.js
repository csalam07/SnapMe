const Story = ({ key, image, title }) => {
  return (
    <div class="story" key={key}>
      <div class="profile-photo">
        <img src={image} alt="" />
      </div>
      <p class="name">{title}</p>
    </div>
  );
};

export default Story;
