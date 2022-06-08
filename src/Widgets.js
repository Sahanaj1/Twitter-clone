import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className='wdigets'> 
        <div className="widgets__input">
<SearchIcon className='widgets__searchIcon'/>
<input placeholder='search twitter ' type="text"/>

        </div>
        <div className="widgets__widgetContainer">
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"1504351035560763395"} />
            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elon musk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/TheElonmusk/"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
        </div>
        </div>
  )
}

export default Widgets