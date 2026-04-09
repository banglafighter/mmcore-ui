import {MMDefaultProps} from "../common/mm-default-props";

export type ButtonVariant = "primary" | "secondary" | "info" | "danger" | "warning" | "success" | "outline" | "link"
export type ButtonSize = "default" | "sm" | "xs" | "lg" | "icon" | "iconSm" | "iconLg" | "iconXs"
export type ButtonType = 'button' | 'reset' | 'submit'


export interface DefaultButtonProps extends MMDefaultProps {
    variant?: ButtonVariant
    size?: ButtonSize
}

export interface WebButtonProps extends DefaultButtonProps {
    type?: ButtonType
}

export interface AppButtonProps extends DefaultButtonProps {}
