import { HandHelping, HandshakeIcon, LocateFixedIcon, MailIcon, PhoneCallIcon, PhoneIncomingIcon } from "lucide-react";
import { Section } from "./Section";
import { Title } from "./Title";

export function Contatos () {

    return(
        <main className="pg-contatos">
             <Section>
                <Title>
                    Contatos
                </Title>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                    <div className="flex-3/12">
                        <h3 className="mt-0">Fale Conosco:</h3>
                        <p className="flex gap-2 items-center mt-8">
                            <MailIcon className="text-teal-300" />
                            contato@loksat.com.br
                        </p>
                        <p className="flex gap-2 items-center">
                            <HandshakeIcon className="text-teal-300" />
                            comercial@loksat.com.br
                        </p>
                        <p className="flex gap-2 items-center">
                            <PhoneCallIcon className="text-teal-300" />
                            (79)3085-0617
                        </p>
                        <p className="flex gap-2 items-center">
                            <PhoneIncomingIcon className="text-teal-300" />
                            (79)99953-6073
                        </p>
                        <br/><br/>
                        <p className="flex gap-2 items-start">
                            <LocateFixedIcon className="text-teal-300" />
                            <ul>
                                <li>Rua Guilhermino Rezende, nº 321</li>
                                <li>Bairro: Salgado Filho</li>
                                <li>Aracaju – Sergipe</li>
                                <li>CEP: 49020-270</li>
                            </ul>
                        </p>

                    </div>
                    <div className="flex-9/12">
                        <iframe className="w-full h-full min-h-96 rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7834.982914206574!2d-37.051645!3d-10.9262!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU1JzM0LjMiUyAzN8KwMDMnMDUuOSJX!5e0!3m2!1spt-BR!2sus!4v1748969237545!5m2!1spt-BR!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </Section>
        </main>
    )
}