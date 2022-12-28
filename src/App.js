
import { useState } from 'react';
import './App.css';
import { CounterWrapper } from './components/counter-wrapper/counterWrapper';
import { Pl } from './components/clubs-list/pl';


function App() {
  const [isToggled, setIsToggled] = useState(false);

  const btnHandler = () => {
    const btn = document.querySelector('.btn-toggle');
    btn.classList.toggle('btn-toggle--hide');

    setIsToggled(!isToggled);
  }

  return (
    <div className="App">
      <button className='btn-toggle' onClick={()=> btnHandler()}>{isToggled ? 'Sakrij brojace' : 'Prikazi brojace'  }</button>
      {isToggled && <CounterWrapper/>}
      <Pl/>
    </div>
  );
}

export default App;
