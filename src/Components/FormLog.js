import "./style.css";
import React from 'react'

export default function FormLog() {
  return (
    <div className="loginFormComp">
      <form className="loginForm">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button className="btn-login" type="submit">LOGIN</button>
      </form>
      <div className="fplink"><a href="/#">Forgot Password ?</a></div>
    </div>
  )
}