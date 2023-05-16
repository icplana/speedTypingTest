

export const Results = ({ hitsCounter, errorCounter }) => {
  return (
    <div className='text-center mt-5 bg-gray-300 w-fit mx-auto px-5 py-3 text-2xl'>
      <p
        className="text-blue-600 font-semibold"
      >Hits: { hitsCounter }</p>

      <p
        className={`font-semibold" ${ ( errorCounter > 0 ) ?'text-red-600': ''}`}
      >Errors: { errorCounter }</p>

      <p
        className={`font-semibold 
            ${(hitsCounter - errorCounter) < 100 ? 'text-red-400' :''}
            ${(hitsCounter - errorCounter) >= 100 && (hitsCounter - errorCounter) < 200  ? 'text-yellow-300' :''}
            ${(hitsCounter - errorCounter) >= 200 && (hitsCounter - errorCounter) < 300  ? 'text-green-500' :''}
            ${(hitsCounter - errorCounter) >= 300 ? 'text-orange-00' :''}
        `}
      >Puntuation: { hitsCounter - errorCounter }</p>
    </div>
  )
}
