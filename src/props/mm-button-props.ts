import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps} from "mmcore";

export type ButtonVariant = "primary" | "secondary" | "info" | "danger" | "warning" | "success" | "outline" | "link" | "ghost"
export type ButtonSize = "default" | "sm" | "xs" | "lg" | "icon" | "iconSm" | "iconLg" | "iconXs"
export type ButtonType = 'button' | 'reset' | 'submit'


export interface DefaultButtonProps extends MMDefaultProps {
    variant?: ButtonVariant
    size?: ButtonSize
}

export interface WebButtonPropsBase extends DefaultButtonProps {
    type?: ButtonType
}

export type WebButtonProps = WebButtonPropsBase & UIComponentProps<"button">

export interface AppButtonProps extends DefaultButtonProps {}


export type ButtonGroupOrientation = 'horizontal' | 'vertical'

export interface DefaultButtonGroupProps extends MMDefaultProps {
    orientation?: ButtonGroupOrientation
}

export interface WebButtonGroupPropsBase extends DefaultButtonGroupProps {}

export type WebButtonGroupProps = WebButtonGroupPropsBase & UIComponentProps<"div">


export interface AppButtonGroupProps extends DefaultButtonGroupProps {}