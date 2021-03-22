import React from 'react'
import './style.css'
import headerbg from '../img/headerbg.webp'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="bg-box">
          <img className="header-bg" src={headerbg} alt="headerbg" />
        </div>
        <div className="header-icon">
          <div className="icon-top">
            <div className="back"></div>
            <div className="icon-top-right">
              <div className="photo"></div>
              <div className="share"></div>
            </div>
          </div>
          <div className="icon-right">
            <div className="help"></div>
          </div>
          <div className="time">
            <div >学习<span className="days">32</span>天</div>
            <div >时长<span className="hours">64</span>小时</div>
          </div>
        </div>
      </div>
    )
  }
}