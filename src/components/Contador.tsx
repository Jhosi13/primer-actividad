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
    <div>
      <h1>Contador</h1>
      <p>Valor actual: {count}</p>
      <button onClick={handleIncrementar}>Incrementar</button>
      <button onClick={handleDecrementar}>Decrementar</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
};

export default Contador;
