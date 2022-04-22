import React from 'react';

const data = [
  {
    id: 1,
    name: 'Keke Benamene',
    time: new Date(),
    message: 'accepted your friend request',
    avatar: './images/profile-2.jpg',
  },
  {
    id: 2,
    name: 'Sonia Lana',
    time: new Date(),
    message: 'accepted your friend request',
    avatar: './images/profile-3.jpg',
  },
  {
    id: 3,
    name: 'Keke Benamene',
    time: new Date(),
    message: 'accepted your friend request',
    avatar: './images/profile-2.jpg',
  },
  {
    id: 4,
    name: 'Sonia Lana',
    time: new Date(),
    message: 'accepted your friend request',
    avatar: './images/profile-3.jpg',
  },
  {
    id: 5,
    name: 'Keke Benamene',
    time: new Date(),
    message: 'accepted your friend request',
    avatar: './images/profile-2.jpg',
  },
];

const NotificationItem = ({ key, ...item }) => {
  return (
    <div key={key}>
      <div class="profile-photo">
        <img src={item.avatar} alt="" />
      </div>
      <div class="notification-body">
        <b>{item.name}</b> {item.message}
        <small class="text-muted">{item.time} DAYS AGO</small>
      </div>
    </div>
  );
};

function Notificaton() {
  return (
    <div class="notifications-popup notify">
      {data.map((item) => (
        <NotificationItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Notificaton;
