import './App.css' 
import {CHECKOUT_STEPS} from '../src/data/data.jsx';
import { useEffect } from 'react';

function App() {
   
  useEffect(() => {
    console.log(CHECKOUT_STEPS)
  }, [])

  return (
    <div className="bg-green-700">
     Hi there its shashank
    </div>
  )
}

export default App
