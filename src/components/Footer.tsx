import { Endereco } from "./Endereco";

export function Footer() {

    return(
        <footer className="footer">
            <div className="container footer__container">
                <div className="flex items-center w-full md:w-auto justify-center text-center"><strong>LOKSAT</strong> &copy; 2025</div>
                <div><Endereco /></div>
            </div>
        </footer>

    )
}