
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Simulaltion } from './pages/Simulation'
import { Game } from './pages/Game'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
         <Route path='/simulation' element={<Simulaltion/>}/>
         <Route path='/game' element={<Game/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
