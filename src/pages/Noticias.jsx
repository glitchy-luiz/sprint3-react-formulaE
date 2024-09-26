import Cardnoticias from '../components/Cardnoticias'
import './noticias.css'

function Noticias (){

    const noticias = [
        {
            titulo: 'a',
            texto: 'b',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'a',
            texto: 'b',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'a',
            texto: 'b',
            img: 'https://via.placeholder.com/600x300'
        },
    ]

    return(
        <>
            <section className="grid-container-noticias">
                <Cardnoticias dadosnoticia={noticias}/>
            </section>
        </>
    )
}
export default Noticias