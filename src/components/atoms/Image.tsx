import { default as NextImage } from "next/image";

export default function Image(props: {
  src: string;
  className?: string;
  altText: string;
  priority?: boolean
}) {
  return (
    <NextImage
      src={props.src}
      alt={props.altText}
      className={props.className}
      width={1000}
      height={1000}
      priority={props.priority ? props.priority : false}
    />
  );
}
