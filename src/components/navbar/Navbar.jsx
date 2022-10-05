import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  const [show, handleShow] = useState(false)
  const navigate = useNavigate();

  const transitionNavbar = (e) => {
    if (window.scrollY > 100) {
      handleShow(true);
    }
    else {
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          src={"./logo.png"}
          alt="netflix-logo"
          className="nav_logo"
        />
        <img
          onClick={() => navigate("/profile")}
          src="./Netflix-avatar.png"
          alt="avatar"
          className='nav_avatar'
        />
      </div>
    </div>
  )
}

export default Navbar