import React from 'react'
import './style.css'
import MyHeader from '../../components/MyHeader'
import MySearch from '../../components/MySearch'
import Banner from '../../components/Banner'
import MyScoller from '../../components/MyScoller'
import MyActivity from '../../components/MyActivity'
import CourseRanking from '../../components/CourseRanking'


export default class MyFinder extends React.Component {
  render() {
    return (
      <div className="my-finder">
        <MyHeader />
        <MySearch />
        <Banner />
        <MyScoller />
        <MyActivity />
        <CourseRanking />
      </div>

    )
  }
}
