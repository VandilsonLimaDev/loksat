import { PhoneCallIcon } from "lucide-react";
import { Section } from "./Section";
import { Title } from "./Title";

export function Suporte () {

    return(
        <main className="pg-suporte">
             <Section>
                <Title>
                    Suporte
                </Title>
                <div>
                    <p>Estamos à disposição de nossos clientes 24 horas para atendimentos de emergência.</p>
                    <div className="flex flex-col md:justify-self-start mt-8">
                        <p><strong>Cliente, em emergências, ligue:</strong></p>
                        <a href="tel:+5579999536073" className="flex gap-4 items-center justify-center border-2 border-solid border-teal-500 px-8 py-2 rounded-full font-bold text-2xl hover:scale-105 ease-in-out duration-500 transition-all">
                            <PhoneCallIcon />
                            (079) 99953-6073
                        </a>
                    </div>
                </div>
            </Section>
        </main>
    )
}