import React from 'react'
import './TitleBar.css'
import refreshIcon from '../../assets/images/refresh-icon.png'

const TitleBar = () => {
  return (
    <div className='app-title-container'>
        <div className='title-bar'>
            <h1 className='app-title'>Random-Smashdown.site</h1>
        </div>
        <div className="refresh-container">
          <button className='refresh-btn' onClick={() => window.location.reload(false)}><img src={refreshIcon} alt="" className='refresh-img' /></button>
        </div>
    </div>
  )
}

export default TitleBar