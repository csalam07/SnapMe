import React from 'react';
import Input from '../Input';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

function Header() {
  const dispatch = useDispatch();

  return (
    <nav>
      <div class="container">
        <h2 class="log">Snap Me</h2>
        <Input
          icon="search"
          type="search"
          placeholder="Search..."
          name="username"
          // value=""
          onChange={() => {}}
          onBlur={() => {}}
        />
        <div class="create">
          <p
            class="btn btn-primary"
            for="create-post"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </p>
          <div class="profile-photo">
            <img src="/images/profile-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
