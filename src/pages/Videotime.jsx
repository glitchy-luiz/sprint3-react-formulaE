import { NavLink, useParams } from "react-router-dom"

function Videotime(){
    
    const {time, video} = useParams();
    const linkoriginal = decodeURIComponent(video)

    return(
        <>
            <main>
                <section id="live-stream">
                    <NavLink to='/streaming'>
                        <div id="seta"></div>
                    </NavLink>
                    <h1 className="section-title">HIGHLIGHTS 
                    <span className="title-destaque">{time}</span></h1>
                    <div className="stream-grid">
                        <div className="main-stream">
                            <iframe width="560" height="315" src={linkoriginal} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Videotime