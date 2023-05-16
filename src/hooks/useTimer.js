import { useRef, useState } from "react"


export const useTimer = () => {

    const inputRef = useRef()
    const resetBtnRef = useRef()
    const countdownTime = 59999
    const [remainingTime, setRemainingTime] = useState( countdownTime )
    const [countStarted, setCountStarted] = useState(false)

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
                      
          }
          
          
        }, 1000);
      }
      

  return {
    startCounter,
    countdownTime, 
    setRemainingTime, 
    setCountStarted, 
    remainingTime,
    inputRef,
    resetBtnRef
  }
}
