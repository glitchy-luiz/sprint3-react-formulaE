import { NavLink } from "react-router-dom"

function Header (){
    return(
        <>
            <header>
                <nav>
                    <div><a className="logo" href="#hero">Fórmula E</a></div>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/streaming'>Streaming</NavLink></li>
                        <li><NavLink to='/carros'>Carros</NavLink></li>
                        <li><NavLink to=''>Pilotos</NavLink></li>
                        <li><NavLink to='/noticias'>Notícias</NavLink></li>
                        <li><NavLink to=''>Loja</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header