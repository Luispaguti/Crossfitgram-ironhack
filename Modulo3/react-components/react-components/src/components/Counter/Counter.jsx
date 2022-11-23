import { useState } from 'react';


function Counter({ className, max, min }) {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);
  const countUp = () => setCount((countPrev) => countPrev < max ? countPrev +1 : countPrev  );
  const countDown = () => setCount((countPrev) =>countPrev > min ? countPrev -1 : countPrev );

  return(
    <div className={`d-flex bg-light border flex-column align-items-center counter p-2 ${className}`}>
      <span>{count}</span>
      <div className="d-flex" >
        <button className="btn btn-sm btn-secondary me-1" onClick={countDown}>-</button>
        <button className="btn btn-sm btn-warning me-1" onClick={reset}>reset</button> 
        <button className="btn btn-sm btn-primary me-1" onClick={countUp}>+</button>
      </div>
    </div>

  )
}

export default Counter;