import { HandshakeIcon, LocateFixedIcon, MailIcon, PhoneCallIcon, SmartphoneIcon } from "lucide-react";
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
                        <a href="mailto:contato@loksat.com.br" className="flex mb-2 gap-2 items-center mt-8">
                            <MailIcon className="text-teal-300" />
                            contato@loksat.com.br
                        </a>
                        <a href="mailto:comercial@loksat.com.br" className="flex mb-2 gap-2 items-center">
                            <HandshakeIcon className="text-teal-300" />
                            comercial@loksat.com.br
                        </a>
                        <a href="tel:7930850617" className="flex mb-2 gap-2 items-center">
                            <PhoneCallIcon className="text-teal-300" />
                            (79)3085-0617
                        </a>
                        <a href="tel:79999536073" className="flex mb-2 gap-2 items-center">
                            <SmartphoneIcon className="text-teal-300" />
                            (79)99953-6073
                        </a>
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
                    <div className="flex-9/12 relative">
                        <iframe className="w-full h-full min-h-96 rounded-2xl z-20 relative" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7834.982914206574!2d-37.051645!3d-10.9262!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU1JzM0LjMiUyAzN8KwMDMnMDUuOSJX!5e0!3m2!1spt-BR!2sus!4v1748969237545!5m2!1spt-BR!2sus" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="w-full bg-gray-100 rounded-2xl h-full min-h-96 absolute top-0 right-0 animate-pulse flex justify-center items-center z-0 text-zinc-300">CARREGANDO...</div>
                    </div>
                </div>
            </Section>
        </main>
    )
}