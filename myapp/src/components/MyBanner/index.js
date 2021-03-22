import React from 'react'
import './style.css'
import Banner1 from '../../imgs/banner1.webp'
import Banner2 from '../../imgs/banner2.webp'
import Banner3 from '../../imgs/banner3.webp'
import Banner4 from '../../imgs/banner4.webp'


export default class MyBanner extends React.Component {
  //问题，当切换页面时，会出现短暂的轮播空白，解决：图片回到第一张时候，未修改渐变时间
  init = (pre_Img, current_Img, next_Img) => {
    let carousel = document.querySelector('.carousel')
    let carsellists = document.querySelectorAll(".carousel-item")
    //轮播过程。上一张图片回到原来位置 没有过渡
    //当前图片和下一张。左移动100% 添加过渡
    //当前图片变为上一张 //取消本张图片的动画属性none
    //下一张图片变为当前图片
    //当执行到最后一张图片img5 添加判断
    //这时 next = 5 current = 4 pre = 3
    //下一刻 pre = 4 current 5 next = 0

    //pre = 5 current = 0 next = 1  

    //pre = 0 current = 1 next = 2 
    //pre = 1 current = 2 next = 3
    //pre = 3 current = 4 next = 5
    //pre = 4 current = 5 next = 0
    //pre = 0 current = 1 next = 2
    //初始化
    console.log(carsellists[pre_Img])
    carsellists[pre_Img].style.transition = "none"
    carsellists[current_Img].style.transition = "none"
    carsellists[next_Img].style.transition = "none"
    carsellists[pre_Img].style.webkitTransform = "translateX(-200%)"
    carsellists[current_Img].style.webkitTransform = "translateX(-100%)"
  }
  handlerMove = () => {
    let carousel = document.querySelector('.carousel')
    let carsellists = document.querySelectorAll(".carousel-item")
    let pre_Img = 5 //上一张图片 方向左
    let current_Img = 0 //当前图片
    let next_Img = 1//下一张图片
    this.init(pre_Img, current_Img, next_Img)
    setInterval(function () {
      carsellists[current_Img].style.transition = "0.2s ease-in-out 0s"
      carsellists[next_Img].style.transition = "0.2s ease-in-out 0s"
      carsellists[current_Img].style.transform = "translateX(-200%)"
      carsellists[next_Img].style.transform = "translateX(-100%)"
      //滑动后，恢复上一张图片的位置，
      carsellists[pre_Img].style.transition = "none"
      carsellists[pre_Img].style.webkitTransform = "translateX(0)"
      pre_Img = current_Img
      current_Img = next_Img
      if ((next_Img + 1) === 5) {
        next_Img = 0
      }
      next_Img = next_Img + 1

    }, 3000)
  }

  componentDidMount() {
      this.handlerMove()
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel-container">
          <img className="carousel-item" src={Banner1} alt="img1" />
          <img className="carousel-item" src={Banner2} alt="img2" />
          <img className="carousel-item" src={Banner3} alt="img3" />
          <img className="carousel-item" src={Banner4} alt="img4" />
          <img className="carousel-item" src={Banner1} alt="img5" />
          <img className="carousel-item" src={Banner2} alt="img6" />
        </div>

      </div>
    )
  }

}