import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps} from "mmcore";

export type BadgeVariant = "primary" | "secondary" | "info" | "danger" | "warning" | "success" | "outline" | "link" | "ghost"

export interface DefaultBadgeProps extends MMDefaultProps {
    variant?: BadgeVariant
}

export interface WebBadgePropsBase extends DefaultBadgeProps {
    asChild?: boolean
}

export type WebBadgeProps = WebBadgePropsBase & UIComponentProps<"span">

