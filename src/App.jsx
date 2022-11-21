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
  const [classNameCard, setClassNameCard] = useState('card');

  // const handleClick = () => {
  //   setQuoteRandom(getRandomFromArray(quotes));
  //   setColorRandom(getRandomFromArray(colors));
  // };

  const handleClick = () => {
    let animationState = 0;
    const a = setInterval(() => {
      if (animationState === 0) {
        setClassNameCard(classNameCard + ' card-transform');
      }
      if (animationState === 1) {
        setClassNameCard(classNameCard + ' card-transitionNone');
        setQuoteRandom(getRandomFromArray(quotes));
      }
      if (animationState === 2) {
        setClassNameCard('card');
        setColorRandom(getRandomFromArray(colors));
      }
      if (animationState === 3) clearInterval(a);
      animationState += 1;
    }, 200);
  };

  const objStyle1 = {
    color: colorRandom,
  };

  const objStyle = {
    backgroundColor: colorRandom,
  };

  return (
    <div className="App" style={objStyle}>
      <TitleBox objStyle1={objStyle1} />
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
        classNameCard={classNameCard}
      />
    </div>
  );
}

export default App;
