import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default () => (
  <header>
    <AuthConsumer>

       {({ isAuth }) => (
          <div>
            <h3>
              <Link to="/">
                HOME
              </Link>
            </h3>
            {isAuth ? (
              <ul>
                <Link to="/dashboard">
                  Dashboard
                </Link>
                <button>
                  logout
                </button>
              </ul>
            ) : (
              <button>login</button>
            )}
          </div>
        )}

    </AuthConsumer>
  </header>
)