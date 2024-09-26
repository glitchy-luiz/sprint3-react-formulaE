
function Cardnoticias ({dadosnoticia}){
    return(
        <>
        {
            dadosnoticia.map((peganoticias) => (
            <article className="news-item large">
                <img src={peganoticias.img} alt={peganoticias.titulo}/>
                <div className="news-content">
                    <h2 className="h2Noticia">{peganoticias.titulo}</h2>
                    <p className="pNoticia">{peganoticias.texto}</p>
                    <a href="#">Leia mais</a>
                </div>
            </article>
            ))
        }
        </>
    )
}
export default Cardnoticias