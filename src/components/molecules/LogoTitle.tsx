import Heading, { HeadingType } from "../atoms/Heading";
import Icon from "../atoms/Icon";

export default function LogoTitle() {
    return (
        <div className="flex flex-row justify-center my-5">
            {/* <Leaf height={"3rem"} width={"3rem"} color="green" className="inline"/> */}
            <Icon name="Sprout" size={"3rem"} color="#004D24"/>
            <Heading className="inline align-middle" type={HeadingType.WebsiteTitle}>Garden Archive</Heading>
        </div>
    )
}