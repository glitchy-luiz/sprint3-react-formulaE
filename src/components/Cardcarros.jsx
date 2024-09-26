
function Cardcarros({dados}){
    return(
        <>
            {
                dados.map((pegadados, index)=>(
                    <div className="grid-item" data-aos="fade-up">
                        <img src={pegadados.img} alt={'Carro Fórmula E ' + {index}} className="car-image"/>
                        <h3>{pegadados.titulo}</h3>
                        <p>{pegadados.texto}</p>
                    </div>
                ))
            }
        </>
    )
}
export default Cardcarros