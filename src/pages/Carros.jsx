import Cardcarros from "../components/Cardcarros"
import Secaoinicial from "../components/Secaoinicial"
import './carros.css'

function Carros (){

    const cards = [
        {
            img: 'img/carro1.jpg',
            titulo: 'Velocidade e Potência',
            texto: 'Os carros da Fórmula E são projetados para alcançar velocidades de até 280 km/h, combinando potência e eficiência.'
        },
        {
            img: 'img/carro2.jpg',
            titulo: 'Sustentabilidade',
            texto: 'Com zero emissões de carbono, esses carros são um marco na luta pela preservação do meio ambiente.'
        },
        {
            img: 'img/carro3.jpg',
            titulo: 'Tecnologia de Ponta',
            texto: 'Equipados com baterias de alta capacidade, os carros elétricos garantem energia suficiente para completar corridas emocionantes.'
        },
        {
            img: 'img/carro4.jpg',
            titulo: 'Design Inovador',
            texto: 'Os carros da Fórmula E são conhecidos por seu design aerodinâmico, moderno e futurista.'
        },
    ]

    return(
        <>
            <Secaoinicial titulo='Carros Elétricos da Fórmula E' subtitulo='Alta performance, design moderno e zero emissões.' img='url(/src/assets/legoCarro.webp)'/>

            <section className="grid-section">
                <h2 className="section-title">Carros em Destaque</h2>
                <div className="grid-container-carros">
                    <Cardcarros dados={cards}/>
                </div>
            </section>
        </>
    )
}
export default Carros