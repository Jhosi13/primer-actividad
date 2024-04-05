import './App.css'

import Contador from './components/Contador.tsx'
import Card from './components/Card.tsx'

<h1>Primera Actividad</h1>

const data = [
  {
    imagen: "imagen1.jpg",
    titulo: "Título 1",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    boton: "Ver más"
  },
  {
    imagen: "imagen1.jpg",
    titulo: "Título 2",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    boton: "Ver más"
  },
  {
    imagen: "imagen1.jpg",
    titulo: "Título 3",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    boton: "Ver más"
  },
  {
    imagen: "imagen1.jpg",
    titulo: "Título 4",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    boton: "Ver más"
  },
  {
    imagen: "imagen1.jpg",
    titulo: "Título 5",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    boton: "Ver más"
  },
  {
    imagen: "imagen1.jpg",
    titulo: "Título 6",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    boton: "Ver más"
  }
  // ... 5 objetos más
];

function App() {
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <Card key={item.titulo} data={item} />
        ))}
      </div>
      <Contador/>
    </div>
  );
};


export default App;
