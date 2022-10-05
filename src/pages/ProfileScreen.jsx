import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../app/features/userSlice'
import Navbar from '../components/navbar/Navbar'
import { auth } from '../firebase'
import "./profile.css"

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Navbar />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="./Netflix-avatar.png" alt="avatar" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button className='profileScreen__signOut' onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen