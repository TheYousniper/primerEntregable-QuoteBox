import React from 'react'
import BtnQuote from './BtnQuote'
import TextQuoteAndAuthor from './TextQuoteAndAuthor'

const QuoteBox = ({quoteRandom, handleClick, colorRandom, classNameCard}) => {

    const objStyle = {
        color: colorRandom,
    }

    const objStyleBtn = {
        backgroundColor: colorRandom,
    }

  return (
    <article className={classNameCard} style={objStyle}>
        <i className="card__icon fa-solid fa-quote-left"></i>
        <TextQuoteAndAuthor
        quoteRandom={quoteRandom}
        />
        
        <img src="https://i.postimg.cc/3xn7m3r0/react.png" alt="React Js Logo Png @clipartmax.com"></img>
        <BtnQuote
        objStyleBtn = {objStyleBtn}
        handleClick = {handleClick}
        />
    </article>
  )
}

export default QuoteBox