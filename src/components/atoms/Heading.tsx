
export enum HeadingType {
    WebsiteTitle = 1,
    PageTitle,
    SectionHeader,
    SubSectionHeader    
}

export default function Heading(props: { type: HeadingType, children: React.ReactNode, className?: string }, ) {
    switch(props.type) {
        case HeadingType.WebsiteTitle: return(
            <h1 className={props.className}>{props.children}</h1>
        )
        case HeadingType.PageTitle: return(
            <h2 className={props.className}>{props.children}</h2>
        )
        case HeadingType.SectionHeader: return(
            <h3 className={props.className}>{props.children}</h3>
        )
        case HeadingType.SubSectionHeader: return(
            <h4 className={props.className}>{props.children}</h4>
        )
    }
}