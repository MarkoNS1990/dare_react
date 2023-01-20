
// import { useState } from 'react';
import './App.css';
import { CounterWrapper } from './components/counter-wrapper/counterWrapper';
import { Pl } from './components/clubs-list/pl';
import { Navigation } from './routes/navigation/navigation';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/home/home';


function App() {
  // const [isToggled, setIsToggled] = useState(false);

  // const btnHandler = () => {
  //   const btn = document.querySelector('.btn-toggle');
  //   btn.classList.toggle('btn-toggle--hide');

  //   setIsToggled(!isToggled);
  // }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>} />
          <Route path='/counter' element={<CounterWrapper/>} />
          <Route path='/premier-liga' element={<Pl/>} />
        </Route>
      </Routes>
      {/* <button className='btn-toggle' onClick={()=> btnHandler()}>{isToggled ? 'Sakrij brojace' : 'Prikazi brojace'  }</button>
      {isToggled && <CounterWrapper/>}
      <Pl/> */}
    </div>
  );
}

export default App;
