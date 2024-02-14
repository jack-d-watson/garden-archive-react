import { default as NextImage } from "next/image";

export default function Image(props: {
  src: string;
  className?: string;
  altText: string;
}) {
  return (
    <NextImage
      src={props.src}
      alt={props.altText}
      className={props.className}
      width={1000}
      height={1000}
    />
  );
}
