import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetAuth } from '../../slices/authSlice';

export default function Header() {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(resetAuth());
    navigate('/');
  };
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <div className="navbar-brand">Dashboard</div>
        {Object.keys(authData).length > 0 ? (
          <div className="collapse navbar-collapse" id="navbar-info">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-neutral btn-round"
                  onClick={logout}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
