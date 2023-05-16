import { useEffect, useRef, useState } from 'react'



function App() {

  const countdownTime = 59999
  const [remainingTime, setRemainingTime] = useState( countdownTime )
  const [countStarted, setCountStarted] = useState(false)
  const [errorCounter, setErrorCounter] = useState(0)
  const [hitsCounter, setHitsCounter] = useState(0)
  const pRef = useRef()
  const inputRef = useRef()
  const resetBtnRef = useRef()

  const startCounter = () => {
    if (countStarted) return

    setCountStarted(true)

    const startTime = new Date().getTime()
    const finishTime = startTime + countdownTime

    const contador = setInterval(() => {
      setRemainingTime( finishTime - new Date().getTime())

      if(finishTime - new Date().getTime() < 0) { 
        clearInterval( contador )
        inputRef.current.setAttribute('disabled',true)
        resetBtnRef.current.classList.add('block')
        resetBtnRef.current.classList.remove('hidden')
        alert('Tiempo agadotado!')
        checkPuntuacion()
      
      }
      
      
    }, 1000);
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
  
  const handleInput =  () => {
    startCounter()
    checkPuntuacion()
  }

  return (
   <>
    <h1 className='text-center text-3xl font-semibold mt-4'>Typing test</h1>

    <div>
      <span className='text-center block my-5'>Time left: 00:00:{Math.trunc( remainingTime/1000 )}</span>    
    </div>

    <p 
    ref= { pRef }
      className='text-center w-3/4 mx-auto'
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt voluptates laborum, minima, laboriosam nostrum perferendis tempora vitae, illum id itaque assumenda veritatis quo laudantium nulla in aspernatur accusantium doloribus voluptatibus. <br />
      Rem in eos quae, voluptatem vel aperiam debitis nemo distinctio a porro adipisci aliquid modi quam eveniet dignissimos maiores perferendis expedita. Facere culpa, cupiditate at iure in iusto maiores reprehenderit? <br />
      Dolorem commodi eos nesciunt, ex, at cum mollitia sunt enim, hic fugit et doloribus? A magni dignissimos reprehenderit facere voluptatibus natus, consectetur necessitatibus. Repellendus, illum atque distinctio error soluta ea! <br />
      Iste esse, mollitia delectus nihil adipisci sapiente obcaecati, architecto autem modi perspiciatis harum dolorum nisi. Vitae veniam laboriosam voluptates dolor repellat cupiditate debitis cum accusantium quos optio, error expedita laborum. <br />
      At autem iste cum nulla nam. Velit architecto dolores asperiores dolorum libero temporibus perferendis natus alias praesentium! Eum, non doloremque! Beatae, tempora reprehenderit facilis at nobis sequi sint eius consectetur.
    </p>

    <p className='text-center font-bold mt-11'>Escribe el texto:</p>
  <input 
    type="text" 
    ref={ inputRef }
    className={`block border round bg-gray-50 mx-auto w-3/4 mt-5 ${(errorCounter > 0) ? 'bg-red-200 text-red-500' :'' }`}
    onInput={ handleInput }
  
  />
    <div className='text-center mt-5'>
      <p>Hits: { hitsCounter }</p>
      <p>Errors: { errorCounter }</p>
      <p>Puntuation: { hitsCounter - errorCounter }</p>
    </div>
    <button 
      onClick={handleReset}
      ref={resetBtnRef}
      className='px-2 py-1 mx-auto bg-blue-300 mt-5 rounded hidden'>Volver a probar</button>
   </>

  )
}

export default App
