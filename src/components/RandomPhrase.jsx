import React from 'react'
const RandomPhrase = ({ quote }) => {

  const { author, phrase } = quote

  return (
    <div className='container-phrase'>
      <div className="content-phrase-author">
        <p className='phrase'>{phrase}</p>
        <p className='author'>Fuente : {author}</p>
      </div>
    </div>
  )
}

export default RandomPhrase