import { CarIcon, EyeIcon, VideoIcon } from "lucide-react";
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
                <div className="flex gap-8 flex-col md:flex-row">
                    <div className="flex items-center flex-col md:flex-row gap-8 bg-teal-100/70 rounded-2xl px-8 py-8">
                        <div className="md:w-2/12 flex justify-center items-center">
                            <CarIcon className="w-18 h-18 text-teal-400 " />
                        </div>
                        <div className="w-10/12">
                            <h3 className="mt-0">Rastreamento Veicular Padrão</h3>
                            <p>Monitoramento em tempo real, histórico de rotas, alertas de ignição e cerca eletrônica. Segurança, controle e praticidade para sua frota ou veículo particular.</p>
                            <br/>
                            <Button url="https://sis.getrak.com/loksat"> ACESSE </Button>
                        </div>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-8 bg-teal-100/70 rounded-2xl px-8 py-8">
                        <div className="md:w-2/12 flex justify-center items-center">
                            <EyeIcon className="w-18 h-18 text-teal-400 " />
                        </div>
                        <div className="w-10/12">
                            <h3 className="mt-0">Rastreamento com Videomonitoramento</h3>
                            <p>Além do rastreamento completo, conte com imagens ao vivo de dentro do veículo. Ideal para empresas que exigem segurança reforçada e supervisão total da operação.</p>
                            <br />
                            <Button url="https://sis.getrak.com/loksat"> ACESSE </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    )
}