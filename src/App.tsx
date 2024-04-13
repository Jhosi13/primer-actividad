import './App.css'
import Cards from './components/Cards.tsx'
import Contador from './components/Contador.tsx';








function App() {
  
  return (
    <div className='App'>
      <h1 className=' d-flex justify-content-center align-items-center '>Cards</h1>
      <Cards/>
      <Contador/>
    </div>
    
  );
}

export default App;
