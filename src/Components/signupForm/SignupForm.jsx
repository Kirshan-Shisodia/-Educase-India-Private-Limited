import "./signupForm.css";
import React from 'react'

export default function SignupForm() {
  return (
    <div className="signupFormComp">
    <form className="signupForm">
      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button className="btn-signup" type="submit">SIGNUP</button>
    </form>
  </div>
  )
}
