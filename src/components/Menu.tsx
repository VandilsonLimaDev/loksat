import { Handshake, HandshakeIcon, HeadsetIcon, HouseIcon, MapPinIcon, MedalIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Menu () {

    return (
         <nav className="nav">
                <ul className="nav__menu">
                    <li>
                        <NavLink className="nav__menu-link" to="/">
                            <HouseIcon />
                            <span>Inicial</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__menu-link" to="/quemsomos">
                            <MedalIcon />
                            <span>Quem Somos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__menu-link" to="/suporte">
                            <HeadsetIcon />
                            <span>Suporte</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__menu-link" to="/servicos">
                            <HandshakeIcon />
                            <span>Serviços</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__menu-link" to="/contatos">
                            <MapPinIcon />
                            <span>Contatos</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )

}