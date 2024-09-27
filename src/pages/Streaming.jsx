import './streaming.css'


function Streaming(){
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
        </>
    )
}
export default Streaming