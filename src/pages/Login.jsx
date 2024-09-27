import Formlogin from "../components/Formlogin"
import './login.css'

function Login (){
    return(
        <>
            <main className="contatos" style={{backgroundImage: `url(/src/assets/09.jpg)`}}>
                    <div id="comentarios">
                        <div className="comente-container">
                            <Formlogin/>
                        </div>
                    </div>
            </main>
        </>
    )
}
export default Login