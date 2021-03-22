import React from 'react'
import './style.css'
export default class CourseItems extends React.Component {
  componentDidMount() {
    console.log(123)
  }
  render() {
    return (
      <div className="course-items" >
        <div className="course-item-up">
          <div className="course-img" style={{ backgroundImage: "url(" + this.props.data.ImgSrc + ")" }}>
          </div>
          <div className="course-title">
            {this.props.data.title}
          </div>
        </div>
        <div className="course-item-down">
          <div className="course-img" style={{ backgroundImage: "url(" + this.props.data.ImgSrc + ")" }}>
          </div>
          <div className="course-title">
            {this.props.data.title}
          </div>
        </div>
      </div >
    )
  }
}