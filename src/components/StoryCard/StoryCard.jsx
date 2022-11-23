import React from 'react'
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { motion } from 'framer-motion';
import "./StoryCard.scss";

function StoryCard({ item, category, toggle, setToggle }) {
    return (
        <motion.div
            whileInView={toggle ? { y: [300, 0] } : ""}
            transition={toggle ? { duration: 0.8, ease: 'easeOut' } : ""}
            className="item"
            style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 99.99%, rgba(0, 0, 0, 0.8) 100%) ,url(${item.urlToImage})`,
            }}
        >
            <div className='header'>
                {toggle ? (
                    <div className='arrow' >
                        <BiLeftArrowAlt onClick={() => setToggle(false)} />
                        <button>{category}</button>
                    </div>
                ) : (
                    <button>{category}</button>
                )}
                <BsFillBookmarkFill />
            </div>
            <div className='body'>
                <div className='content'>
                    <p className='time'>

                        {JSON.stringify(Math.ceil(Math.abs(new Date() - new Date(item.publishedAt)) / 36e5))} hours ago
                    </p>
                    <h3 className='title'>{
                        item.title ? item.title.slice(0, 50) : item.title
                    }...</h3>
                    <p className='desc'>{
                        item.description ? item.description.slice(0, 50) : item.content
                    }...</p>
                </div>
                <div className="footer">
                    <p className='author'>{item.author ? item.author.slice(0, 20) : "Not available"}</p>
                    <div className="dot"></div>
                    <p className="publisher">{item.source.name}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default StoryCard