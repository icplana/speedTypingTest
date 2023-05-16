import { useEffect, useRef, useState } from 'react'
import { useTimer } from './hooks/useTimer'
import { MainText } from './components/MainText'
import { Input } from './components/Input'
import { Results } from './components/Results'
import { Timer } from './components/Timer'




function App() {



  const { startCounter, countdownTime, setRemainingTime, setCountStarted, remainingTime, inputRef, resetBtnRef } = useTimer()

  const [errorCounter, setErrorCounter] = useState(0)
  const [hitsCounter, setHitsCounter] = useState(0)
  const pRef = useRef()
  // const inputRef = useRef()
  // const resetBtnRef = useRef()


  const checkPuntuacion = async () => {
    let hits = 0
    let errors = 0
    const userText = inputRef.current.value
    const realText = pRef.current.textContent
    const len = userText.length
      
    for( let i = 0; i < len; i++){
  
      if ( userText[i] === realText[i] ){
               
        hits++
      }
      else { 
      
        errors++
      }
    }
    

    setErrorCounter( errors )
    setHitsCounter( hits )
  }

  
   const handleReset = () => {
    setRemainingTime( countdownTime )
    setCountStarted( false )
    setErrorCounter( 0 )
    setHitsCounter( 0 )
    inputRef.current.removeAttribute('disabled')
    resetBtnRef.current.classList.add('hidden')
    resetBtnRef.current.classList.remove('block')
    inputRef.current.value = ''

 }
  
  
  const handleInput =  () => {
    startCounter()
    checkPuntuacion()
  }

  return (
   <div className='bg-gradient-to-br from-blue-300 to-blue-50 m-0 min-h-screen'>
    <h1 className='text-center text-3xl font-semibold pt-4'>Typing test</h1>

    
    <Timer remainingTime={ remainingTime } />

    <MainText pRef = { pRef } />

    <Input 
      inputRef={ inputRef } 
      errorCounter={ errorCounter }
      handleInput={ handleInput }
    />

    
    <Results 
      hitsCounter={ hitsCounter }
      errorCounter={ errorCounter }
    />

    <button 
      onClick={handleReset}
      ref={resetBtnRef}
      className='px-2 py-1 mx-auto bg-blue-300 mt-5 rounded hidden'>Try again</button>
   </div>

  )
}

export default App
