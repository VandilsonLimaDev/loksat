import { Banner } from "./Banner"
import { Section } from "./Section"
import { Title } from "./Title"

export const Home = () => {
    return(
        <main>
            <Banner />
            <Section>
                <Title>
                    Porque é importante?
                </Title>
                <div className="flex flex-col md:flex-row md:gap-10">
                    <div className="flex flex-col flex-2/3">
                        <p>O rastreamento através do posicionamento geográfico (satélites) é uma das formas mais precisas, baratas e seguras de identificar o posicionamento exato de um veículo, carga ou pessoa.</p>
                        <p>No Brasil há várias razões para que usemos o rastreamento veicular. A principal: segurança do patrimônio. Mas não é somente pela grande possibilidade de recuperação do veículo em caso de furto, há ainda inúmeras outras razões igualmente importantes:</p>
                    </div>
                
                    <div className="flex-1/3">
                        <ul className="list">
                            <li>Recuperação de patrimônio;</li>
                            <li>Segurança pessoal;</li>
                            <li>Rastreadores homologados pela ANATEL;</li>
                            
                        </ul>
                    </div>
                    <div className="flex-1/3">
                        <ul className="list">

                            <li>Vídeo monitoramento veicular;</li>
                            <li>Controle de frota e motoristas;</li>
                            <li>Gestão de frotas em geral.  </li>
                        </ul>
                    </div>
                </div>
            </Section>
            <Section>
                <Title>
                    Como funciona?
                </Title>
                <p>As tecnologias envolvidas no rastreamento veicular são muitas e avançadas. O aparelho se conecta com satélites para determinar sua exata posição geográfica. Então ele envia os dados para um servidor que, por sua vez, posiciona o veículo no mapa, traçando rotas, dando alarmes e oferecendo inúmeras funcionalidades para sua gestão.</p>
                <p>Você pode bloquear seu veículo, desbloquear, mandar comandos especiais e saber muitos detalhes do veículo, como velocidade máxima, média, tempo de uso, entre muitas outras informações.</p>
            </Section>
        </main>
    )
}