import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter"
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon  from "@material-ui/icons/Search"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";


function Sidebar() {
  return (
   <div className='sidebar'>
     <Button variant="link" href="https://twitter.com/Sahana_joshi1?t=A0NP8SZryvlvw_6U497soQ&s=08"className='twitterIcon' >
       <TwitterIcon className='sidebar__twitterIcon'/>
       </Button>
       <SidebarOption active={true} Icon={HomeIcon} text="home"/>
       <SidebarOption   Icon={SearchIcon} text="explore"/>
       <SidebarOption   Icon={NotificationsNoneIcon} text="notification"/>
       <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
   </div>
  )
}

export default Sidebar