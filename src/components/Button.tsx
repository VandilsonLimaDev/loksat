type ButtonProps = {
    children: React.ReactNode;
    url?:string
}

export const Button = ({children, url = "#"}:ButtonProps) => {

    return(
        <a className="btn" href={url} target="_blank">
            {children}
        </a>
        
    )
}