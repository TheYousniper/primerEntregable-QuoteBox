import React from 'react'

const TextQuoteAndAuthor = ({quoteRandom}) => {
  return (
    <div>
        <p className='card__quote' >{quoteRandom.quote}</p>
        <h1 className='card__author'>{quoteRandom.author}</h1>
    </div> 
  )
}

export default TextQuoteAndAuthor