import Campoform from "./Campoform"



function Formlogin (){
    return(
        <>
            <h1>Login</h1>
                <form>
                    <Campoform place = 'Nome de usúario'/>
                    <Campoform place = 'E-mail válido'/>
                    <Campoform place = 'Senha'/>
                    <button id="btnCriar">Enviar</button>
                </form>
        </>
    )
}
export default Formlogin