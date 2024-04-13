
import Card from './Card'
import img1 from '../components/resources/img1.jpg'
import img2 from '../components/resources/img2.jpg'
import img3 from '../components/resources/img3.jpg'
import img4 from '../components/resources/img4.jpg'
import img5 from '../components/resources/img5.jpg' 
import img6 from '../components/resources/img6.jpg'

const cards = [
    {
        id:1,
        title:'Paisaje',
        image:img1,
        url:'https://concepto.de/paisaje/'
    },
    {
        id:2,
        title:'Bosque',
        image:img2,
        url:'https://concepto.de/bosque/'
    },
    {
        id:3,
        title:'Playa',
        image:img3,
        url:'https://concepto.de/playa/'
    },
    {
        id:4,
        title:'Sendero',
        image:img4,
        url:'https://concepto.de/ecosistemas/'
    },
    {
        id:5,
        title:'Montañas',
        image:img5,
        url:'https://concepto.de/montana/'
    },
    {
        id:6,
        title:'Rio',
        image:img6,
        url:'https://concepto.de/ecosistemas/'
    }
]
function Cards() {
    
    return (
        <div className='container d-flex justify-content-center align-items-center  h-100 '>
        <div className='row'>
            {
                cards.map((card) => (
                    <div className='col-md-2'key={card.id}>
                        <Card title={card.title} imageSource={card.image} url={card.url}/>
                    </div>
                ))
            }

            
            </div>
            
        </div>
    )
}

export default Cards