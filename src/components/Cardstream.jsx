import { NavLink } from "react-router-dom"

function Cardstream ({stream}){
    return(
        <>
        {
            stream.map((pegastream)=>(
            <div className="grid-item"  data-aos="fade-up">
                <NavLink to={`/videotime/${pegastream.nome}/${encodeURIComponent(pegastream.video)}`}>
                    <img src={pegastream.img} alt={pegastream.nome} className="car-image"/>
                </NavLink>
            </div>
            ))
        }
        </>
    )
}
export default Cardstream