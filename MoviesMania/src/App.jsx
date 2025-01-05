import './App.css'
import Home from './component/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <div className='w-screen h-screen bg-gray-800'>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
};

export default App
