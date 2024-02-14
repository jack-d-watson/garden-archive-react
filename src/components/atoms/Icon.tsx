import dynamic from "next/dynamic"
import { LucideProps } from "lucide-react"
import dynamicIconProps from "lucide-react/dynamicIconImports"


export type IconNames = keyof typeof dynamicIconProps

interface IconProps extends LucideProps {
    name: IconNames
}

export default function Icon(props: IconProps) {
    const { name, ...iconProps } = props
    const LucideIcon = dynamic(dynamicIconProps[name])
    return <LucideIcon {...iconProps} />
}