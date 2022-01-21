import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Adddata from './components/Adddata'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Showdata from './components/Showdata';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

<Container maxWidth="lg">


<BrowserRouter>
<Header/>
    <Routes>
      
        <Route path="/show" element={<Showdata />} />

        <Route path="/add" element={   <Adddata/>} />

       
 
    </Routes>
  </BrowserRouter>
       



     

      
      </Container>


     
    </div>
  )
}

export default App
