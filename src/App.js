import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Statistics from "./components/Statistics";

import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";
import Main from "./components/mainPage";
import Dashboard from "./components/dashboard/dashboard";
import TicTacToe from "./components/games/TicTacToe";
import BrickBreaker from "./components/games/bricksMania";
import SlidingPuzzle from "./components/games/slidingPuzzle";
import Game2048 from "./components/games/game2048";
import Progress from "./components/progress";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import ResetPassword from "./components/forgotPassword/resetPassword";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router >
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/testGameOn/"
                element={
                  // user ? <Dashboard /> : <Main />
                  <Main />
                }
              />
              <Route path="/testGameOn/home" element={<Dashboard />} />
              {/* <Route path="/testGameOn/quiz" element={<Quiz />} /> */}
              <Route path="/testGameOn/login" element={<Login />} />
              <Route path="/testGameOn/progress" element={<Progress />} />
              <Route path="/testGameOn/register" element={<SignUp />} />
              <Route path="/testGameOn/profile" element={<Profile />} />
              <Route path="/testGameOn/tic-tac-toe" element={<TicTacToe />} />
              <Route path="/testGameOn/bricks-mania" element={<BrickBreaker />} />
              <Route path="/testGameOn/slidding-puzzle" element={<SlidingPuzzle />} />
              <Route path="/testGameOn/statistics" element={<Statistics />} />
              <Route path="/testGameOn/2048-game" element={<Game2048 />} />
              <Route path="/testGameOn/forgotPassword" element={<ForgotPassword />} />
              <Route path="/testGameOn/resetPassword" element={<ResetPassword />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
