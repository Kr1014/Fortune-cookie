import './App.css'
import RandomPhrase from './components/RandomPhrase'
import phrases from './utils/phrases.json'
import randomIndex from './services/randomIndex'
import { useState } from 'react'
import ButtonPhrase from './components/ButtonPhrase'
import bgArray from './utils/bgArray.json'

function App() {

  const sentence = randomIndex(phrases)
  const bgIndex = randomIndex(bgArray)

  const [quote, setQuote] = useState(sentence)
  const [bgApp, setBgApp] = useState(bgIndex)

  const bgStyle = {
    backgroundImage : `url('../assets/fondo${bgApp}.jpg')`
  }


  return (
    <>
    <div className='container-all' style={bgStyle}>
      <div className='container'>
        <h1>GALLETAS DE LA FORTUNA</h1>
          <RandomPhrase
            quote = {quote}
          />
          <ButtonPhrase
            setQuote = {setQuote}
            setBgApp = {setBgApp}
          />
      </div>
     </div>
    </>
  )
}

export default App
