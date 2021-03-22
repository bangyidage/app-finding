import React from 'react'
import './style.css'
import picFriends from '../img/pic-friends.jpeg'
import friendsbg from '../img/bg@2x.png'
import support from '../img/support.png'
import share from '../img/share.png'
import picdyb from '../img/ynamic-bottom.png'
import friendsimg from '../img/d.jpeg'

export default class Dynamic extends React.Component {
  render() {
    return (
      <div>
        <div className="dynamic">
          <div className="dynamic-top">
            <div className="dynamic-title">动态</div>
            <div className="dynamic-title-r"></div>
          </div>
          <div className="dynamic-main">
            <div className="friends">
              <div className="friends-head">
                <div className="friends-head-l">
                  <img className="pic-friends" src={picFriends} alt="friends" />
                  <div className="friends-state">回复了帖子</div>
                </div>
                <img className="friends-head-r" src={friendsbg} alt="img" />
              </div>
              <div className="friends-msg">5月16日作业：不知道为什么，今天真的有人跟我道歉来着，天助我完成作业也，上图看下我们的演练场景。</div>
              <div className="video-group">
                <div className="friends-video">
                  <div className="btn-video">
                  </div>
                  <div className="video-progress"></div>
                  <div className="video-time">8</div>
                </div>
                <div className="video-nums">2条</div>
              </div>
              <div className="imgs-group">
                <img className="friends-img" src={picFriends} alt="imgs" />
                <img className="friends-img" src={picFriends} alt="imgs" />
                <img className="friends-img" src={picFriends} alt="imgs" />
              </div>
              <div className="friends-bottom">
                <div className="posted-time">昨天</div>
                <div className="posted-time-right">
                  <div className="support-group">
                    <img className="btn-support" src={support} alt="support" />
                    <div className="support-nums">2</div>
                  </div>
                  <div className="btn-share">
                    <img className="share-img" src={share} alt="share" />
                    <div className="share-txt">分享</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dynamic-main">
            <div className="friends">
              <div className="friends-head">
                <div className="friends-head-l">
                  <img className="pic-friends" src={picFriends} alt="friends" />
                  <div className="friends-state">回复了帖子</div>
                </div>
                <div className="friends-head-r"></div>
              </div>
              <div className="friends-msg">5月16日作业：不知道为什么，今天真的有人跟我道歉来着，天助我完成作业也，上图看下我们的演练场景。</div>
              <div className="video-group">
                <div className="friends-video">
                  <div className="btn-video">
                  </div>
                  <div className="video-progress"></div>
                  <div className="video-time">8</div>
                </div>
                <div className="video-nums">2条</div>
              </div>
              <div className="friends-bottom">
                <div className="posted-time">2小时前</div>
                <div className="posted-time-right">
                  <div className="support-group">
                    <img className="btn-support" src={support} alt="support" />
                    <div className="support-nums">点赞</div>
                  </div>
                  <div className="btn-share">
                    <img className="share-img" src={share} alt="share" />
                    <div className="share-txt">分享</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dynamic-main">
            <div className="friends">
              <div className="friends-head">
                <div className="friends-head-l">
                  <img className="pic-friends" src={picFriends} alt="friends" />
                  <div className="friends-state">做了作业</div>
                </div>
                <div className="friends-head-r"></div>
              </div>
              <div className="friends-msg">5月16日作业：不知道为什么，今天真的有人跟我道歉来着，天助我完成作业也，上图看下我们的演练场景。不知道为什么，今天道为道为道为道为道为</div>
              <div className="friends-img-bottom ">
                <img src={friendsimg} alt="imgs" />
              </div>
              <div className="friends-bottom">
                <div className="posted-time">昨天</div>
                <div className="posted-time-right">
                  <div className="support-group">
                    <img className="btn-support" src={support} alt="support" />
                    <div className="support-nums">2</div>
                  </div>
                  <div className="btn-share">
                    <img className="share-img" src={share} alt="share" />
                    <div className="share-txt">分享</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dynamic-bottom">
          <img className='dynamic-bottom-img' src={picdyb} alt='dynamic-bottom-img' />
          <div className="dynamic-bottom-about" >仅展示2019年以后的动态～</div>
        </div>
      </div>
    )
  }
}