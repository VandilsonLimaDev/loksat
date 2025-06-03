type TitleProps = {
    children: React.ReactNode;
}

export const Title = ({children}:TitleProps) => {

    return(
        <h2 className="title">
            {children}
        </h2>
    )
}