type SectionProps = {
    children: React.ReactNode;
}

export const Section = ({children}:SectionProps) => {

    return(
        <section className="section">
            <div className="container">
                {children}
            </div>
        </section>
    )
}