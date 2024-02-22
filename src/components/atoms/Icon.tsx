import { LucideProps, icons } from "lucide-react"

interface IconProps extends LucideProps {
    name: keyof typeof icons
}

export default function Icon(props: IconProps) {
    const { name, ...iconProps } = props
    const LucideIcon = icons[name]
    if(!LucideIcon) {
      throw Error("Could not render icon with name " + name)
    }
    return <LucideIcon {...iconProps} />
}

