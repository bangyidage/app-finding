import React from 'react'
import './style.css';

export default class CourseRanking extends React.Component {
  render() {
    return (
      <div className="course-ranking">
        <div className="course-ranking-top">
          <div className="course-ranking-icon"></div>
          <div className="course-ranking-title">精选小课排行榜</div>
        </div>
        <div className="course-ranking-main">
          <div className></div>
        </div>
      </div>
    )
  }
}