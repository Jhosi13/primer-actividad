import '../App.tsx'
import './Contador.tsx'
import './Cards.css'

function  Card({title, imageSource, url}) {
  
  return (
    <div className="card text center bg-dark animate_animated animate_fadeInUp">
      <div className='overflow'>
      
      <img src={imageSource} alt='' className='card-img-top'/>
      </div>
      <div className="card-body text-light">
      <h4 className="card-tittle ">{title}</h4>
      <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua.</p>
      <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
        Go to this website
      </a>
      
      <p>Valor actual:</p>
      </div>
    </div>
  );
}

export default Card;