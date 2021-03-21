import React from 'react'
import './style.css'

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="input-wrap">
          <span className="input-title">用户名</span>
          <input className="input" />
        </div>
        <div className="input-wrap">
          <span className="input-title">密码</span>
          <input className="input" />
        </div>
      </div>
    )
  }
}