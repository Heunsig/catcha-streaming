import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import history from '../history'

const Header = () => {
  return (
    <div className="ui top fixed menu inverted">
      <div className="item">
        <h3 onClick={() => history.push('/')} style={{'cursor':'pointer'}}>Catcha Streaming</h3>
      </div>
      <Link to="/" className="item">All Streams</Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header