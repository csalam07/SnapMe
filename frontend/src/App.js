import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageRender from './Router/PageRender';
import Home from './pages/index.js';
import Login from './pages/login.js';
import Notify from './components/notify/Notify';
import { useSelector } from 'react-redux';
import PrivateRouter from './Router/PrivateRouter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshToken } from './redux/actions/authAction';
import Header from './components/header/Header';

function App() {
  const { auth, alert } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Notify />
      <div className={`${alert.loading && 'hidden'} `}>
        {auth.token && <Header />}
        <Routes>
          <Route path="/" exact element={auth.token ? <Home /> : <Login />} />
          <Route
            exact
            path="/:page"
            element={
              <PrivateRouter>
                <PageRender />
              </PrivateRouter>
            }
          />
          <Route
            exact
            path="/:page/:id"
            element={
              <PrivateRouter>
                <PageRender />
              </PrivateRouter>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
