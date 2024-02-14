import Heading, { HeadingType } from "../atoms/Heading"
import Image from "../atoms/Image"

export default function Hero(props: {
    imageSrc: string,
    imageAltText: string,
    heroText: string,
    children?: React.ReactNode
}) {
    return (
        <div className="hero min-h-96 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image src={props.imageSrc} altText={props.imageAltText} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <Heading type={HeadingType.PageTitle}>{props.heroText}</Heading>
              {props.children}
            </div>
          </div>
        </div>
    )
}