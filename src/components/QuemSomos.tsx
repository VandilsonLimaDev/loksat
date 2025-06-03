import { Section } from "./Section";
import { Title } from "./Title";

export function QuemSomos () {

    return(
        <main className="pg-quemsomos">
            <Section>
                <Title>
                    Quem Somos?
                </Title>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10">

                    <div className="flex-3/12">
                        <ul className="list">
                            <li>Sistema personalizado;</li>
                            <li>Mais funcionalidades;</li>
                            <li>Relatórios gerenciais de frotas;</li>
                            <li>Logística integrada;</li>
                            <li>Telemetria avançada;</li>
                            <li>Manutenção preventiva.  </li>
                        </ul>
                    </div>
                    <div className="flex-9/12">
                        <p>A LOKSAT é uma empresa focada em atender seus clientes com o melhor nível de qualidade em serviços, trabalhando a relação num crescente de valor agregado e garantindo o atendimento das necessidades do cliente no uso combinado de todas as ferramentas disponíveis no mercado, a fim de atingir seus objetivos finais de entrega. Para isto, contamos com uma equipe multidisciplinar de profissionais, sempre pronta para orientar a sua empresa sobre o melhor caminho a seguir.</p>
                        <p>MISSÃO: Atender o cliente com qualidade, ética e garantia de valor agregado crescente numa relação de crescente mútua satisfação.</p>
                        <h3>Nossos serviços são oferecidos através de 3 datacenters de alta disponibilidade, 100% espelhados, para segurança total dos dados e acessos dos nossos clientes.</h3>
                    </div>
                </div>
            </Section>
        </main>
    )
}