import { useState, useEffect } from 'react'

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [location, setLocation] = useState('Sydney')
  const [temperature, setTemperature] = useState(72)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formattedTime = currentTime.toLocaleTimeString()

  return (
    <div className='text-right dark:text-black'>
      <div className='flex gap-1 font-semibold md:text-[14px] dark:text-black justify-end text-[10px]'>
        <h2>{temperature}°F</h2>
        <h1 className='uppercase'>{location}</h1>
        <p>{formattedTime}</p>
      </div>
      <div className='flex gap-1 text-[12px] font-semibold'>
        <div className='w-4 h-5 grid place-items-center rounded-full bg-red-900'>
          <h1 className='text-red-600 text-[12px]'>0</h1>
        </div>
        <div>
          <p>Spots available next two weeks</p>
        </div>
      </div>
      <div className='text-[12px] font-semibold'>info@designrefract.com</div>
    </div>
  )
}

export default Time;
