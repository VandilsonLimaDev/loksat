import { CarIcon, MonitorPlayIcon, MousePointerClick } from "lucide-react";
import { Section } from "./Section";
import { Title } from "./Title";
import { Button } from "./Button";

export function Servicos () {

    return(
        <main className="pg-servicos">
             <Section>
                <Title>
                    Serviços
                </Title>
                <div className="services__container">
                    <div className="services__box">
                        <div className="services__box-icon">
                            <CarIcon />
                        </div>
                        <div className="services__box-content">
                            <h3 className="mt-0 mb-4 flex">Rastreamento Veicular Padrão</h3>
                            <p>Monitoramento em tempo real, histórico de rotas, alertas de ignição e cerca eletrônica.</p>
                            <br/>
                            <Button url="https://sis.getrak.com/loksat"> 
                                ACESSE
                                <MousePointerClick />
                            </Button>
                        </div>
                    </div>
                    <div className="services__box">
                        <div className="services__box-icon">
                            <MonitorPlayIcon />
                        </div>
                        <div className="services__box-content">
                            <h3 className="mt-0 mb-4 flex">Rastreamento com Videomonitoramento</h3>
                            <p>Além do rastreamento completo, conte com imagens ao vivo de dentro do veículo. Ideal para empresas que exigem segurança reforçada e supervisão total da operação.</p>
                            <br />
                            <Button url="https://fulltrackapp.com/emp/lok">
                                ACESSE
                                <MousePointerClick />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    )
}