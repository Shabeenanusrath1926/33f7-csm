import { useState } from 'react'
import {Link} from 'react-router-dom';
import Nav from './components/Nav.jsx'
import Head ,{Footer} from './components/Base.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nMessage: ${message}`);
  }

  return (
    <>
    <BrowserRouter>
    <Head/>
    <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    <h1>Forms</h1>
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <textarea placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <br />
      <button type='submit'>Submit</button>
    </form>
      
    </>
  )
}

export default App