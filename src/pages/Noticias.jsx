import Cardnoticias from '../components/Cardnoticias'
import './noticias.css'

function Noticias (){

    const noticias = [
        {
            titulo: 'Vitória dramática em Londres',
            texto: 'Na última etapa da temporada, a corrida em Londres trouxe emoções do começo ao fim. Com uma ultrapassagem decisiva, Mitch Evans conquistou a vitória nos minutos finais.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Revelado o novo carro Gen3',
            texto: 'A Fórmula E revelou o carro Gen3, que promete ser o mais eficiente da história.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Novas cidades-sede confirmadas',
            texto: 'Expansão global! A Fórmula E anunciou novas corridas em São Paulo, Vancouver e Seul.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Piloto do ano: Jake Dennis',
            texto: 'Com uma performance impecável, Jake Dennis é coroado como o piloto do ano na Fórmula E.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Nova tecnologia de bateria promete maior alcance',
            texto: 'A última inovação em baterias da Fórmula E pode aumentar o alcance dos carros elétricos em 20%, tornando as corridas ainda mais competitivas.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Parceria sustentável com grandes marcas',
            texto: 'Grandes marcas se unem à Fórmula E para promover tecnologias sustentáveis no automobilismo.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Temporada 2024 promete recordes',
            texto: 'Com novos circuitos e equipes, a temporada de 2024 da Fórmula E será a mais competitiva até agora.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Fórmula E promove inclusão e diversidade',
            texto: 'A categoria elétrica está investindo em programas de inclusão para atrair novos talentos e diversificar o grid.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Berlim se torna palco da história',
            texto: 'Berlim foi novamente o cenário de uma corrida épica, onde as estratégias de pit-stop foram decisivas para definir o vencedor.',
            img: 'https://via.placeholder.com/600x300'
        },
        {
            titulo: 'Revelação da temporada: Sam Bird',
            texto: 'Sam Bird se destacou como a grande surpresa da temporada, garantindo pódios importantes e trazendo emoção às pistas.',
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