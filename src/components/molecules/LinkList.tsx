import ListItemLink from "../atoms/ListItemLink";

export type LinkItem = {
  key: string;
  destination: string;
  label: string;
};

export default function LinkList(props: { data: LinkItem[] }) {
    console.log(JSON.stringify(props.data))
  return (
    <ul className="list-disc list-inside">
      {props.data.map((linkItem) => (
        <ListItemLink key={linkItem.key} destination={linkItem.destination}>
          {linkItem.label}
        </ListItemLink>
      ))}
    </ul>
  );
}
