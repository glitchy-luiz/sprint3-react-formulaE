import './streaming.css'
import Cardstream from '../components/Cardstream'

function Streaming(){

    const times = [
        {
            img: '/src/assets/equipe1.png',
            nome: 'ABT CUPRA FORMULA E TEAM',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe2.png',
            nome: 'ANDRETTI FORMULA E',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe3.png',
            nome: 'DS PENSKE',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe4.png',
            nome: 'ENVISION RACING',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe5.png',
            nome: 'ERT FORMULA E TEAM',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe6.png',
            nome: 'JAGUAR TCS RACING',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe7.png',
            nome: 'MAHINDRA RACING',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe8.png',
            nome: 'MASERATI MSG RACING',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe9.png',
            nome: 'NEOM MCLAREN FORMULA E TEAM',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe10.png',
            nome: 'NISSAN FORMULA E TEAM',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
        {
            img: '/src/assets/equipe11.png',
            nome: 'TAG HEUER PORSCHE FORMULA E TEAM',
            video: 'https://www.youtube.com/embed/9HcwbqbXaiw?si=ZJHwzOulQ2DmO_4u'
        },
    ]

    return(
        <>
            <main>
                <section id="live-stream">
                    <div className="stream-grid">
                        <div className="main-stream">
                        <iframe id="livestream" width="100%" height="300px" 
                            src="https://www.youtube.com/embed/live_stream?channel=UC-DDZtrRWiRrRKjtwdJjSBQ" 
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                        </div>
                        <div className="stream-chat">
                            <div className="chat-header">Chat ao Vivo</div>
                            <div className="chat-body">
                                <iframe src="" frameBorder="0"></iframe>
                                <input className="text-chat" type="text-chat" placeholder="Chat"/>
                                <button id="btnCriar">Enviar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section class="grid-section">
                <h1 className="section-title">Confira os <span class="title-destaque">Highlights </span>das equipes e pilotos abaixo</h1>
                <div className="grid-container">    
                    <Cardstream stream={times}/>
                </div>
            </section>
        </>
    )
}
export default Streaming