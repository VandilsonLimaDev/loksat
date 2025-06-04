import { PhoneCall, SmartphoneIcon } from "lucide-react"

export const Endereco = () => {

    return(
        <div className="flex justify-center md:justify-start lg:items-center flex-col lg:flex-row">
            <div className="px-8 pb-2 md:px-0 md:pb-0">Rua Guilhermino Rezende, 321, Aracaju/SE - 49020-270, Brasil</div> 
            <div className="flex flex-wrap">
                <div className="flex"><span className="text-teal-400 pr-1 pl-0 md:pl-2 hidden lg:inline-flex">•</span> <a className="flex gap-2 items-center" href="tel:+557930850617"> <PhoneCall className="text-teal-400 w-5 -mb-1" /> (79) 3085-0617</a></div> 
                <div className="flex"><span className="text-teal-400 pl-2 pr-1">•</span> <a className="flex gap-2 items-center" href="tel:+5579999536073"><SmartphoneIcon className="text-teal-400 w-5 -mb-1" />(79) 99953-6073</a></div>
            </div>
        </div>
    )
}