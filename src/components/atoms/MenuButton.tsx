import Link from "next/link";

export default function MenuButton(props: {
  icon?: string;
  destination: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={props.destination}
      className="text-lg underline"
    >
      <p className="">{props.children}</p>
    </Link>
  );
}
