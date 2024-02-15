/* eslint-disable jsx-a11y/alt-text */
import Image from "../atoms/Image";

export default function PhotoBox(props: {
  caption: string;
  creditLine?: string;
  altText: string;
  photoUri: string;
  priority: boolean;
  className: string;
}) {
  return <div className={props.className}>
    <p>{props.caption}</p>
    <Image src={props.photoUri} altText={props.altText} className=""/>
    {props.creditLine ? <p className="italic">Photo: {props.creditLine}</p> : <p><br /></p>}
  </div>;
}
