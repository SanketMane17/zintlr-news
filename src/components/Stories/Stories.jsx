import React from 'react'
import { BsFillBookmarkFill } from "react-icons/bs";
import { TbWorldUpload } from "react-icons/tb";
import StoryCard from '../StoryCard/StoryCard';
import "./Stories.scss";

const storiesItems = ["All", "Business", "Entertainment", "Health", "Sports"];

function Stories({ news, category, setCategory, toggle, setToggle }) {

  return (
    <div className='app__stories'>
      <h2 className='heading'>Top Stories for you</h2>
      <div className='app__stories-items'>
        {storiesItems.map((item, index) => (
          <div
            key={index}
            className={item === category ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className='app__stories-list'>
        {news.map((item, index) => (
          <div className='story' key={index}>
            <div className='header'>
              <p className='time'>
                {JSON.stringify(Math.ceil((new Date().getTime() - new Date(item.publishedAt).getTime()) / (1000 * 3600 * 24)))
                } day ago</p>
              <BsFillBookmarkFill />
            </div>

            <div className='body'>
              <div className='content'>
                <h3 className='title'>{
                  item.title ? item.title.slice(0, 50) : item.title
                }...</h3>
                <p className='desc'>{
                  item.description ? item.description.slice(0, 80) : item.content
                }...</p>
              </div>
              <div className='img'>
                <img src={item.urlToImage} alt={item.source.name} />
              </div>
            </div>
            <div className="footer">
              <p className='author'>{item.author ? item.author : "Not available"}</p>
              <div className="dot"></div>
              <p className="category">{item.source.name}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className='explore'
        onClick={() => setToggle(true)}
      >
        <TbWorldUpload size={18} style={{ marginRight: "2px" }} />
        Explore
      </button>
      <div className="animatedStories">
        {toggle && news.map((item, index) => (index === 0 && <StoryCard
          item={item}
          key={index}
          category={category}
          toggle={toggle}
          setToggle={setToggle}
        />))}
      </div>
    </div>
  )
}

export default Stories