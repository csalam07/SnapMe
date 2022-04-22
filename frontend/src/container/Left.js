import React, { useState } from 'react';
import Notificaton from '../components/Notificaton';

const sidebarItems = [
  {
    id: 1,
    icon: 'home',
    name: 'Home',
    active: true,
  },
  {
    id: 2,
    icon: 'compass',
    name: 'Explore',
  },
  {
    id: 3,
    icon: 'bell',
    name: 'Notifications',
  },
  {
    id: 4,
    icon: 'envelope-alt',
    name: 'Message',
  },
  {
    id: 5,
    icon: 'bookmark',
    name: 'Bookmarks',
  },
  {
    id: 5,
    icon: 'chart-line',
    name: 'Analytics',
  },
  {
    id: 6,
    icon: 'palette',
    name: 'Theme',
  },
  {
    id: 7,
    icon: 'setting',
    name: 'Settings',
  },
];

function Left() {
  const [active, setActive] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = (e) => {
    if (e === 3) {
      setActive(e);
      setShowNotification(true);
    } else {
      setActive(e);
      setShowNotification(false);
    }
  };

  return (
    <div class="left">
      <a class="profile">
        <div class="profile-photo">
          <img src="/images/profile-1.jpg" alt="" />
        </div>
        <div class="handle">
          <h4>Fuchi S</h4>
          <p class="text-muted">@fuchi</p>
        </div>
      </a>

      <div class="sidebar">
        <p
          class={`menu-item ${active === 1 && 'active'}`}
          onClick={() => handleClick(1)}
        >
          <span>
            <i class="uil uil-home"></i>
          </span>
          <h3>Home</h3>
        </p>

        <p
          class={`menu-item ${active === 2 && 'active'}`}
          onClick={() => handleClick(2)}
        >
          <span>
            <i class="uil uil-compass"></i>
          </span>
          <h3>Explore</h3>
        </p>

        <p
          class={`menu-item ${active === 3 && 'active'}`}
          onClick={() => handleClick(3)}
        >
          <span>
            <i class="uil uil-bell"></i>
          </span>
          <h3>Notification</h3>
          {showNotification && (
            <div class="notifications-popup notify">
              <div>
                <div class="profile-photo">
                  <img src="./images/profile-2.jpg" alt="" />
                </div>
                <div class="notification-body">
                  <b>Keke Benamene</b> accepted your friend request
                  <small class="text-muted">2 DAYS AGO</small>
                </div>
              </div>
              <div>
                <div class="profile-photo">
                  <img src="./images/profile-3.jpg" alt="" />
                </div>
                <div class="notification-body">
                  <b>Sonia Lana</b> accepted your friend request
                  <small class="text-muted">1 DAYS AGO</small>
                </div>
              </div>
              <div>
                <div class="profile-photo">
                  <img src="/images/profile-4.jpg" alt="" />
                </div>
                <div class="notification-body">
                  <b>Keke Benamene</b> accepted your friend request
                  <small class="text-muted">2 DAYS AGO</small>
                </div>
              </div>
              <div>
                <div class="profile-photo">
                  <img src="/images/profile-5.jpg" alt="" />
                </div>
                <div class="notification-body">
                  <b>Keke Benamene</b> accepted your friend request
                  <small class="text-muted">2 DAYS AGO</small>
                </div>
              </div>
              <div>
                <div class="profile-photo">
                  <img src="/images/profile-6.jpg" alt="" />
                </div>
                <div class="notification-body">
                  <b>Sonia Lana</b> accepted your friend request
                  <small class="text-muted">1 DAYS AGO</small>
                </div>
              </div>
              <div>
                <div class="profile-photo">
                  <img src="/images/profile-7.jpg" alt="" />
                </div>
                <div class="notification-body">
                  <b>Keke Benamene</b> accepted your friend request
                  <small class="text-muted">2 DAYS AGO</small>
                </div>
              </div>
            </div>
          )}
        </p>

        <p
          class={`menu-item ${active === 4 && 'active'}`}
          onClick={() => handleClick(4)}
        >
          <span>
            <i class="uil uil-envelope-alt"></i>
          </span>
          <h3>Messages</h3>
        </p>

        <p
          class={`menu-item ${active === 5 && 'active'}`}
          onClick={() => handleClick(5)}
        >
          <span>
            <i class="uil uil-chart-line"></i>
          </span>
          <h3>Analytics</h3>
        </p>

        <p
          class={`menu-item ${active === 6 && 'active'}`}
          onClick={() => handleClick(6)}
        >
          <span>
            <i class="uil uil-palette"></i>
          </span>
          <h3>Theme</h3>
        </p>

        <p
          class={`menu-item ${active === 7 && 'active'}`}
          onClick={() => handleClick(7)}
        >
          <span>
            <i class="uil uil-setting"></i>
          </span>
          <h3>Settings</h3>
        </p>
      </div>

      <label for="create-post" class="btn btn-primary">
        Create Post
      </label>
    </div>
  );
}

export default Left;
