import React from 'react'
import './style.css'
import picHead from "../img/pic-head.jpg";
import picCourse from '../img/pic-course.jpg'

export default class MainContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFollowed: true,
      arrs: [1, 2, 3, 4, 5, 6, 7, 8],
    }
  }
  handleclickCare = () => {
    this.setState({
      isFollowed: !this.state.isFollowed,
    })
  }
  renderMyCourse() {
    return (
      <div className="course-detail" >
        <div className="course-head">
          <img className="pic-course" src={picCourse} alt="pic-course" />
        </div>
        <div className="class-body">
          <div className="type">日语</div>字体设计修炼设计修炼计修炼计修炼设计修炼</div>
      </div>
    )
  }
  render() {
    return (
      <div className="main-content">
        <div className="pic-btn">
          <div className="pic-head">
            <img className="head" src={picHead} alt="head" />
          </div>
          <div className="pic-right">
            <div className="chat"></div>
            <div className={`btn-care ${!this.state.isFollowed && 'btn-follow'}`} onClick={() => { this.handleclickCare() }}>
              {this.state.isFollowed ? "关注" : "已关注"}
            </div>
          </div>
        </div>
        <div className="main-person">
          <div className="boy">可爱的小男孩</div>
          <div className="user">用户名：快乐的小猪</div>
          <div className="msg">学习使我快乐，我将永远拥有快乐！</div>
          <div className="fans">
            <div className="fans-left">
              <div className="box-cared">
                <p className="fans-cared">1.2万</p>
                <p>关注</p>
              </div>
              <div className="box-num">
                <p className="fans-num">2999</p>
                <p>粉丝</p>
              </div>
            </div>
            <div className="fans-right">
              <div className="visitor">
                <div className="visitor-heads">
                  <div className="local-visitor"></div>
                  <div className="local-visitor"></div>
                  <div className="local-visitor"></div>
                </div>
                <div className="visitor-nums">来访9999人</div>
              </div>
              <div className="visitor-about"></div>
            </div>
          </div>
          <div className="awards">
            <div className="awards-left">
              <div className="awards-pic"></div>
              <div className="awards-res">获得5张奖状</div>
            </div>
            <div className="awards-right">
              <div className="awards-about"></div>
            </div>
          </div>
        </div>
        <div className="course">
          <p className="course-title">在学课程</p>
          <div className="main-course">
            {
              this.state.arrs.map((index, item) => {
                return <this.renderMyCourse key={index} />
              })
            }
          </div>
        </div>
      </div>

    )
  }
}