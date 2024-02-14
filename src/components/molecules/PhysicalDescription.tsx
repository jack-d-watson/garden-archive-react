import BodyCopy from "../atoms/BodyCopy";
import Heading, { HeadingType } from "../atoms/Heading";

export default function PhysicalDescription(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Heading type={HeadingType.SubSectionHeader} className="pt-4">{props.title}</Heading>
      <BodyCopy>{props.children}</BodyCopy>
    </div>
  );
}
