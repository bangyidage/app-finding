import React from 'react'
import './style.css'


export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      banners: {
        BannerTransition: "all 0.3s ease 0s",
        BannerIndex: 0
      },
      imgs: [{
        src: 'https://cc.hjfile.cn/cc/img/20210220/20210220103134158437.jpg?imageView2/2/w/1000/format/webp/ignore-error/1'
      }, {
        src: "https://cc.hjfile.cn/cc/img/20200601/2020060102044214273415.jpg?imageView2/2/w/1000/format/webp/ignore-error/1"
      },
      {
        src: "https://cc.hjfile.cn/cc/img/20201207/2020120704000700780088.jpg?imageView2/2/w/1000/format/webp/ignore-error/1",
      }]
    }
  }
  componentDidMount() {
    //定时器的清除和添加
    // let index = this.state.banners.BannerIndex
    // let bannerFocus = document.querySelectorAll('.item-focus')
    let banners = document.querySelector('.banner-container')
    // banners.style.transition = "none"
    // banners.style.transform = "none"
    let timer = setInterval(() => {
      // console.log(this.state.banners.BannerTransition)
      if (this.state.banners.BannerIndex === 4) {
        this.setState({
          banners: {
            BannerTransition: "all 0.3s ease 0s",
            BannerIndex: 0
          }
        })
        banners.style.transition = "all 0s ease 0s"
        banners.style.transform = "translateX(-" + (this.state.banners.BannerIndex * 100) + "%)"
      }
      else {
        this.setState({
          banners: {
            BannerTransition: "all 0.3s ease 0s",
            BannerIndex: ++this.state.banners.BannerIndex
          }
        })
        // console.log(this.state.banners.BannerIndex)
        banners.style.transition = this.state.banners.BannerTransition
        banners.style.transform = "translateX(-" + (this.state.banners.BannerIndex * 100) + "%)"
      }
    }, 3000)
  }
  render() {

    return (
      <div className="banner">
        <div className="banner-container">
          <div className="banner-item" style={{ backgroundImage: "url(" + this.state.imgs[0].src + ")" }}>
          </div>
          <div className="banner-item" style={{ backgroundImage: "url(" + this.state.imgs[1].src + ")" }}>
          </div>
          <div className="banner-item" style={{ backgroundImage: "url(" + this.state.imgs[2].src + ")" }}>
          </div>
          <div className="banner-item" style={{ backgroundImage: "url(" + this.state.imgs[0].src + ")" }}>
          </div>
          <div className="banner-item" style={{ backgroundImage: "url(" + this.state.imgs[1].src + ")" }}>
          </div>


        </div>
        <div className="banner-focus">
          <div className={this.state.banners.BannerIndex === 0 ? "item-focus-active" : "item-focus"}></div>
          <div className={this.state.banners.BannerIndex === 1 ? "item-focus-active" : "item-focus"}></div>
          <div className={this.state.banners.BannerIndex === 2 ? "item-focus-active" : "item-focus"}></div>
          <div className={this.state.banners.BannerIndex === 3 ? "item-focus-active" : "item-focus"}></div>
          <div className={this.state.banners.BannerIndex === 4 ? "item-focus-active" : "item-focus"}></div>
        </div>
      </div>
    )
  }

}