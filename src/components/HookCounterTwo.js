import React, {useState} from 'react'

function HookCounterTwo() {

  const initialCount = 0;
  const [count, setCount] = useState(initialCount)

  // const incrementFive = () => {
  //   for (let i = 0; i < 5; i++){
  //     setCount(prevState => prevState + 1)
  //   }
  // }
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* <button onClick={incrementFive}>Increment 5</button> */}

      <button onClick={() => setCount(prevState => prevState + 5)}>Increment Five</button>
    </div>
  )
}

export default HookCounterTwo