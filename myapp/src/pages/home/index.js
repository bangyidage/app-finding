import React from 'react'
import './style.css'
import Login from '../login'
import Header from '../../components/header'
import MainContent from '../../components/mainContent'
import Dynamic from '../../components/dynamic'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <MainContent />
        <Dynamic />
      </div>
    )
  }
}