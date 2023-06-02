import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        <span className='logo'>jayadmin</span>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
<NotificationsNone />
<span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
        <Language/>
<span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
        <Settings/>

        </div>
        <img src="https://images.unsplash.com/photo-1683648839186-c402d6c26249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" className="topAvatar" />
      </div>
    </div>
  </div>
  )
}
