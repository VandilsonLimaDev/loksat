import { NavLink } from "react-router-dom"
import { Menu } from "./Menu"

export const Header = () => {

    return(
        <header className="header">
            <div className="container header__container">
                <h1>
                    <NavLink to="/" className="header__logo">
                        <img className="header__logo-img" src="/loksat.svg" alt="Logo da LokSat" />
                    </NavLink>
                </h1>
                <div className="header__frase">
                    <img className="header__frase-img" src="/rastreamento_telemetria_videomonitoramento.svg" alt="Frase: Rastreamento, Telemetria e Videomonitoramento" />
                </div>
                <div className="header__mapa">
                    <img className="header__mapa-img" src="/mapa.svg" alt="mapa ilustrativo com o símbolo da marca" />
                </div>
            </div>
            <Menu />
        </header>
    )
}