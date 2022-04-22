import React from 'react';
import Input from '../components/Input';

function Right() {
  return (
    <div class="right">
      <div class="messages">
        <div class="heading">
          <h4>Messages</h4>
          <i class="uil uil-edit"></i>
        </div>
        <Input
          type="search"
          icon="search"
          placeholder="Search Messages"
          id="message-search"
          onChange={() => {}}
          // value=""
          onBlur=""
          onFocus=""
        />
        {/* <!-- message category --> */}
        <div class="category">
          <h6 class="active">Primary</h6>
          <h6>General</h6>
          <h6 class="message-requests">Requests(7)</h6>
        </div>
        {/* <!-- Message 1--> */}
        <div class="message">
          <div class="profile-photo">
            <img src="./images/profile-17.jpg" alt="" />
            <div class="active"></div>
          </div>
          <div class="message-body">
            <h5>Edem Quist</h5>
            <p class="text-muted">Just woke up</p>
          </div>
        </div>

        {/* <!-- Message 2 --> */}
        <div class="message">
          <div class="profile-photo">
            <img src="./images/profile-15.jpg" alt="" />
          </div>
          <div class="message-body">
            <h5>Alam Kio</h5>
            <p class="text-bold">Missing You 😭</p>
          </div>
        </div>

        {/* <!-- Message 3 --> */}
        <div class="message">
          <div class="profile-photo">
            <img src="./images/profile-5.jpg" alt="" />
          </div>
          <div class="message-body">
            <h5>Sara Sim</h5>
            <p class="text-bold">What's wrong?</p>
          </div>
        </div>

        {/* <!-- Message 4 --> */}
        <div class="message">
          <div class="profile-photo">
            <img src="./images/profile-3.jpg" alt="" />
            <div class="active"></div>
          </div>
          <div class="message-body">
            <h5>Megha Akash</h5>
            <p class="text-muted">Hi baby 😍</p>
          </div>
        </div>
      </div>
      {/* <!-- End of messages --> */}

      {/* <!-- Freind Request --> */}
      <div class="friend-requests">
        <h4>Requests</h4>
        {/* <!-- request 1 --> */}
        <div class="request">
          <div class="info">
            <div class="profile-photo">
              <img src="./images/profile-13.jpg" alt="" />
            </div>
            <div>
              <h5>Majia Bntu</h5>
              <p class="text-muted">8 mutual friends</p>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-primary">Accept</button>
            <button class="btn">Decline</button>
          </div>
        </div>
        {/* <!-- request 2 --> */}
        <div class="request">
          <div class="info">
            <div class="profile-photo">
              <img src="./images/profile-3.jpg" alt="" />
            </div>
            <div>
              <h5>App Start</h5>
              <p class="text-muted">18 mutual friends</p>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-primary">Accept</button>
            <button class="btn">Decline</button>
          </div>
        </div>
        {/* <!-- request 3 --> */}
        <div class="request">
          <div class="info">
            <div class="profile-photo">
              <img src="./images/profile-4.jpg" alt="" />
            </div>
            <div>
              <h5>Mia Bntu</h5>
              <p class="text-muted">7 mutual friends</p>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-primary">Accept</button>
            <button class="btn">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
