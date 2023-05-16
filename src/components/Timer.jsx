

export const Timer = ({ remainingTime }) => {
    const time = Math.trunc( remainingTime/1000 )
  return (
    <div>
      <span 
        className={`
        text-center block my-5 text-lg font-semibold bg-slate-300 rounded border w-fit mx-auto px-2 py-1
        ${ time < 6 ? 'bg-red-300' :''}
        `}
      >{`
      Time left: 00:00:${ time < 10 ? '0' :'' }${ time }
      
      `}
        </span>    
    </div>

  )
}
