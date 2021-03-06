import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authAction';

function SignIn() {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    password: '',
  };

  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const [typePass, setTypePass] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(login(userData));
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="uil uil-user"></i>
        <input
          type="email"
          placeholder="email"
          onChange={handleChangeInput}
          name="email"
          autoComplete="on"
          value={email}
        />
      </div>
      <div className="input-field">
        <i className="uil uil-lock"></i>
        <input
          type={typePass ? 'text' : 'password'}
          placeholder="Password"
          name="password"
          autoComplete="on"
          onChange={handleChangeInput}
          value={password}
        />
        <small onClick={() => setTypePass(!typePass)}>
          {typePass ? 'Hide' : 'Show'}
        </small>
      </div>
      <input
        type="submit"
        value="Login"
        className="btn btn-primary"
        disabled={email && password ? false : true}
      />
    </form>
  );
}

export default SignIn;
