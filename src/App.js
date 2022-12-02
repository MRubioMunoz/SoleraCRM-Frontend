import Logging from './components/Logging'
import Oportunity from './components/Oportunity';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormContact from './components/FormContact';
import FormOportunity from './components/FormOportunity';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element = {<Logging/>} />
    <Route path ="/opportunity" element = {<Oportunity/>} />
    <Route path ="/opportunity/form" element = {<FormOportunity/>} />
    <Route path ="/opportunity/:idOportunity/contact" element = {<Contact/>} />
    <Route path ="/opportunity/:idOportunity/contact/form" element = {<FormContact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
