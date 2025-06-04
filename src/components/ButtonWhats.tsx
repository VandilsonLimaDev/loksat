type ButtonWhatsappProps = {
    tel?:string,
}

export const ButtonWhatsapp = ({tel}:ButtonWhatsappProps) => {

    return(
        <a className="btn-whatsapp" href={`https://wa.me/55${tel}`} target="_blank">
            <img src="/whatsapp-icon.svg" alt="" />
        </a>
    )
}