import React from 'react'
import { RiDoubleQuotesR } from "react-icons/ri";

const RandomPhrase = ({quote}) => {

    const {author, phrase} = quote

  return (
    <div className='container-phrase'>
      <div className="content-phrase-author">
        <p className='phrase'>{phrase}</p>
        <p className='author'>Fuente : {author} <i className='icon-quotes'><RiDoubleQuotesR/></i></p>
      </div>
    </div>
  )
}

export default RandomPhrase