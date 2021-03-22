import React from 'react'
import './style.css'


export default class MyHeader extends React.Component {
  render() {
    return (
      <div className="header-bar">
        <div className="back"></div>
        <div className="title">CCtalk</div>
      </div>
    )
  }
}
