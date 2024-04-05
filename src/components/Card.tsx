import  {useState} from 'react'
import '../App.tsx'
import './Contador.tsx'

function Card({ data }) {
  const { imagen, titulo, texto, boton } = data;
  const [count] = useState(0);
  return (
    <div className="col-md-2">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <button onClick={boton}>{boton}</button>
      <p>Valor actual: {count}</p>
    </div>
  );
}

export default Card;