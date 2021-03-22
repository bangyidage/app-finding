import React from 'react'
import './style.css'

export default class MySearch extends React.Component {
  render() {
    return (
      <div className="my-search">
        <div className="btn-search">
          <div className="pic-search"></div>
          <div className="search-show">搜索“万词课”训练营</div>
        </div>
      </div>
    )
  }
}
