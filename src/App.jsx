
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
     <div>
      <header className='App-header'>
        <p> Count is: {counter} </p>
        <p>
          <button type='button' onClick={ () => { dispatch(increment()) } }  >
            ++
          </button>
          <button type='button' onClick={ () => { dispatch(decrement()) } }  >
            --
          </button>
          <button type='button' onClick={ () => { dispatch(incrementBy(2)) } }  >
            +2
          </button>
        </p>
      </header>
     </div>
  )
}

export default App
