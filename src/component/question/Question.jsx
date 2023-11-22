
import  { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, ans,p1,p2,p3 }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='border-b border-gray-600 mb-4'>
      <header className='flex justify-between items-center mb-6 text-xl md:text-3xl'>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && (
        <div className='pb-4 text-gray-500 text-sm md:text-base'>
          <p>{ans}</p>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
      )}
    </article>
  )
};

export default Question;