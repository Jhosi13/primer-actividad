import  {useState} from 'react'
import '../App.tsx'


export const Contador = () => {
    
  // Declaración del estado del contador con un valor inicial de 0
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleIncrementar = () => {
    setCount(count + 1);
  };

  // Función para decrementar el contador
  const handleDecrementar = () => {
    setCount(count - 1);
  };

  // Función para reiniciar el contador a 0
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className='App'>
      <div className='container d-flex justify-content-center align-items-center  h-100 '>
      <h1>Contador</h1>
      
      <button className='btn btn-outline-secondary rounded-0' onClick={handleIncrementar}>Incrementar</button>
      <button className='btn btn-outline-secondary rounded-0' onClick={handleDecrementar}>Decrementar</button>
      <button className='btn btn-outline-secondary rounded-0' onClick={handleReset}>Reiniciar</button>
      <p>Valor actual: {count}</p>
      </div>
      
    </div>
  );
};

export default Contador;
