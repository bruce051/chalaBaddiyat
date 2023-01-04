import './App.css';
import Header from './components/main/header/Header'
import Home from './pages/home/Home';
import {Route, Routes } from 'react-router-dom'
import HvI from './pages/HvI/HvI'
import Kitoblar from './pages/kitoblar/Kitoblar';
import KitoblarHaqida from './pages/kitoblarHaqida/KitoblarHaqida'


function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hvi' element={<HvI/>}/>
          <Route path='/books' element={<Kitoblar/>}/>
          <Route path='/about-books' element={<KitoblarHaqida/>}/>
        </Routes>

    </div>
  );
}

export default App;
