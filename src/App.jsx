import { useEffect, useState } from 'react'
import './App.css'
import HomeScreen from './pages/HomeScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './pages/LoginScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './app/features/userSlice';
import ProfileScreen from './pages/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  // const user = null;
  console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // login
        dispatch(login({
          uid: user.uid,
          email: user.email,
        }))
      }
      else {
        // logout
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (<LoginScreen />) : (
          <>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />s
            </Routes>
          </>
        )}
      </Router>,
    </div>
  )
}

export default App
