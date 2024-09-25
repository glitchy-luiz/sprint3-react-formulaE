import './streaming.css'


function Streaming(){
    return(
        <>
            <main>
                <section id="live-stream">
                    <div class="stream-grid">
                        <div class="main-stream">
                            <iframe src="https://www.youtube.com/watch?v=63WgbfejAVM" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="stream-chat">
                            <div class="chat-header">Chat ao Vivo</div>
                            <div class="chat-body">
                                <iframe src="" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Streaming