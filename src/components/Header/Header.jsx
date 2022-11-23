import React from 'react'
import StoryCard from '../StoryCard/StoryCard';
import "./Header.scss";

function Header({ news, category }) {
  return (
    <div className='app__header'>
      <div className="app__header-items">
        {news.map((item, index) => (
          <StoryCard item={item} key={index} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Header;