import Heading, { HeadingType } from "../atoms/Heading";

export default function PageTitle(props: { title: string; subtitle?: string }) {
    return (
        <div className="text-center">
            <Heading type={HeadingType.PageTitle} className="pt-8">{props.title}</Heading>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    )
}
