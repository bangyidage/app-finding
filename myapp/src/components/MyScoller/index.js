import React from "react"
import CourseItems from "../CourseItems/index"
import './style.css'

export default class MyScoller extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      course: [
        {
          id: "0",
          title: "学英语",
          ImgSrc: "https://cc.hjfile.cn/cc/img/20200407/2020040705290447269777.gif?imageView2/2/w/200/format/webp/ignore-error/1",
        },
        {
          id: "1",
          title: "考研",
          ImgSrc: "https://cc.hjfile.cn/cc/img/20200403/2020040303443981195871.png?imageView2/2/w/200/format/webp/ignore-error/1",
        },
        {
          id: "2",
          title: "绘画",
          ImgSrc: "https://cc.hjfile.cn/cc/img/20200407/2020040705280708998598.gif?imageView2/2/w/200/format/webp/ignore-error/1",
        },
        {
          id: "3",
          title: "公考",
          ImgSrc: "https://cc.hjfile.cn/cc/img/20200403/2020040303391539966208.png?imageView2/2/w/200/format/webp/ignore-error/1",
        },
        {
          id: "4",
          title: "小语种",
          ImgSrc: "https://cc.hjfile.cn/cc/img/20201117/2020111704443359990983.png?imageView2/2/w/200/format/webp/ignore-error/1",
        },
        {
          id: "5",
          title: "0元抢",
          ImgSrc: "https://cc.hjfile.cn/cc/img/20201026/2020102611450781798654.gif?imageView2/2/w/200/format/webp/ignore-error/1",
        },
      ]
    }
  }
  render() {
    return (
      <div className="my-scoller">
        <div className="course-box">
          <div className="course-menus">
            {
              this.state.course.map((item) => {
                return <CourseItems data={item} key={item.id} />
              })
            }
          </div>
        </div>
        <div className='ad'>
          <div className="ad-l">
            <div className="adl-t1">最多七个字最多</div>
            <div className="adl-t2">最多九个字最多九个</div>
            <div className="adlimg-box">
              <div className="adl-img"></div>
            </div>

          </div>
          <div className="ad-r">
            <div className="adr1">
              <div className="adr-l">
                <div className="adrl-t1">最多八个字最多八</div>
                <div className="adrl-t2">听说读写一次搞定</div>
              </div>
              <div className="adr-r"></div>
            </div>
            <div className="adr1 adr2">
              <div className="adr-l">
                <div className="adrl-t1">手残党变大神</div>
                <div className="adrl-t2">最多十个字最多十个字</div>
              </div>
              <div className="adr-r">
              </div>
            </div>
          </div>
        </div>
        <div className="hot">
          <div className="hot-wrap">
            <a className="hot-item" href="https://www.cctalk.com/" rel=""> </a>
            <a className="hot-item" href="https://www.cctalk.com/" rel=""> </a>
            <a className="hot-item" href="https://www.cctalk.com/" rel=""> </a>
            <a className="hot-item" href="https://www.cctalk.com/" rel=""> </a>
          </div>
        </div>
      </div>
    )
  }
}