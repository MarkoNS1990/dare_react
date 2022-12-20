
import './App.css';
import SimpleCounterClass from './components/class-based/SimpleCounterClass';
import SimpleCounterFunction from './components/function-based/SimpleCounterFunction';


function App() {
  return (
    <div className="App">
      <SimpleCounterClass/>
      
      
      <SimpleCounterFunction/>
    </div>
  );
}

export default App;
