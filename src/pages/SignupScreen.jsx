import React, { useRef } from 'react'
import "./signup.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const SignupScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error)
            });
    }

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert("Please sign up first")
            });
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email Address' />
                <input ref={passwordRef} type="password" placeholder='password' />
                <button onClick={signIn} type='submit'>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix?</span><span onClick={register} className='signupScreen__link'> Sign Up now </span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen