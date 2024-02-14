import Link from "next/link";

export default function ListItemLink(props: {
  children: React.ReactNode;
  key: string;
  destination: string;
}) {
  return (
    <li>
      <Link href={props.destination} className="link">{props.children}</Link>
    </li>
  );
}
