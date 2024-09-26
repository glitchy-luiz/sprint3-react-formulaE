
function Cardnoticias ({dadosnoticia}){
    return(
        <>
        {
            dadosnoticia.map((peganoticias) => (
            <article className="news-item large">
                <img src={peganoticias.img} alt={peganoticias.titulo}/>
                <div className="news-content">
                    <h2>{peganoticias.titulo}</h2>
                    <p>{peganoticias.texto}</p>
                    <a href="#">Leia mais</a>
                </div>
            </article>
            ))
        }
        </>
    )
}
export default Cardnoticias