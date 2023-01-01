import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Login from './pages/Login'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>
      <Route exact path='/Projects' element={<Projects/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
