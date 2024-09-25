
function Secaoinicial(dados){
    return(
        <>
            <section id="carros-hero" className="hero" style={{backgroundImage: dados.img}}>
                <div className="hero-text">
                    <h1>{dados.titulo}</h1>
                    <p>{dados.subtitulo}</p>
                </div>
            </section>
        </>
    )
}
export default Secaoinicial