import './App.css';
import React, { useState, useEffect }  from 'react';
import Text from './Text/Text.json';
import Header from './Components/Header'
import Carousel from './Components/Carousel'
import NewsEvents from './Components/NewsEvents'
import Channel from './Components/Channel'
import Artists from './Components/Artists'
import Footer from './Components/Footer'

const { 
  text: [{
    title
  }]} = Text;

const App = props => {

  const [search, showSearch] = useState(false);
  const [menu, showMenu] = useState(false);
  const [carousel, changeCarousel] = useState(0);

  const showSearchField = () => {
    showSearch(!search);
  }

  const showMenuDropDown = () => {
    showMenu(!menu);
  }

  const changeCarouselImage = whichImage => {
    changeCarousel(whichImage);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let newNum = 0;
      carousel === 3 ? newNum = 0 : newNum = carousel + 1;
      changeCarouselImage(newNum);
    }, 5000);
    return () => clearInterval(interval);
  }, [carousel]);

  return (
    <div className="App">
      <Header 
        showSearchField={showSearchField}
        showMenuDropDown={showMenuDropDown}
        searchState={search}
        menuState={menu}
        closeSearch={showSearchField}
      /> <h1>{title}</h1>
      <Carousel 
        changeCarouselImage={changeCarouselImage}
        whichImage={carousel}
      /><NewsEvents />
      <Channel />
      <Artists />
      <Footer />
    </div>
  );
}

export default App;
