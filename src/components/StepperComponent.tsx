import { useState } from 'react'

const Stepper = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <button className=" py-2 px-6 rounded-sm self-start      
              text-white bg-cy-blue
              border-solid border-2 border-transparent
              hover:border-gray-700 hover:bg-cy-blue
              disabled:opacity-50   
              disabled:cursor-not-allowed"
              onClick={() => setCount((count) => count + 1)}>
                count is {count}
             </button>
             <button className=" py-2 px-6 rounded-sm self-start      
              text-white bg-cy-blue
              border-solid border-2 border-transparent
              hover:border-gray-700 hover:bg-cy-blue
              disabled:opacity-50   
              disabled:cursor-not-allowed"
              onClick={() => setCount((count) => count - 1)}>
                count is {count}
             </button>
        </>
    )
};

export default Stepper;