import { useSelector, useDispatch } from 'react-redux'

const useCounter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const increment = () =>
    dispatch({
      type: 'INCREMENT',
    })
  const decrement = () =>
    {
      const cat = localStorage.getItem('ras');
      console.log("[cunt-ras]",cat)
      const cok = document.cookie.match('token');
      console.log("[cunt-cok]",cok)
    dispatch({
      type: 'DECREMENT',
    })}
  const reset = () =>
    dispatch({
      type: 'RESET',
    })
  return { count, increment, decrement, reset }
}

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
