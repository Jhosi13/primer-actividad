import './App.css'
import './Card.tsx'
import './Contador.tsx'
import Contador from './Contador.tsx'
import Card from './Card.tsx'



function App() {


  return (
    <>
      
      
      <h3>Primera Actividad </h3>

      <div>
      <Card component="#mi-div" />
    </div>

    <div>
        <Contador component="#mi-div" />
      </div>
    </>
  )
}


export default App
