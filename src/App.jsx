import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json';
import { useState } from 'react';
import colors from './json/colors.json';
import TitleBox from './components/TitleBox';

function App() {
  const getRandomFromArray = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom];
  };
  const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes));
  const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors));

  const handleClick = () => {
    setQuoteRandom(getRandomFromArray(quotes));
    setColorRandom(getRandomFromArray(colors));
  };
  const objStyle1 = {
    color: colorRandom,
}

  const objStyle = {
    backgroundColor: colorRandom,
  };

  return (
    <div className="App" style={objStyle}>
      <TitleBox
        objStyle1 = {objStyle1}
      />
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  );
}

export default App;
