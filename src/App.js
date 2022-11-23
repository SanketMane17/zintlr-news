import React, { useState, useEffect } from 'react'
import './App.css';
import { Header, Navbar, Stories } from './components';

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("All");
  const [toggle, setToggle] = useState(false);

  const getNews = async (category) => {
    try {
      let url = category === "All" ?
        "https://newsapi.org/v2/top-headlines?country=de&apiKey=9e8195575c60467dab6ca82ab71f06ac" :
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9e8195575c60467dab6ca82ab71f06ac`;

      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getNews(category);
  }, [category]);
  return (
    <div className="App">
      <Navbar />
      <Header news={news} category={category} />
      <Stories
        news={news}
        category={category}
        setCategory={setCategory}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
}

export default App;
