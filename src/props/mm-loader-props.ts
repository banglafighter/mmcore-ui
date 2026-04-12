import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponent, UIComponentProps} from "mmcore";


export type LoaderVariant = "spinner"
export type LoaderSize = "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
export type LoaderSpeed = .5 | 1 | 2 | 3 | 4 | 5
export type LoaderDirection = "normal" | "reverse" | "alternate"

export interface DefaultLoaderProps extends MMDefaultProps {
    variant?: LoaderVariant
    size?: LoaderSize
    speed?: LoaderSpeed
    direction?: LoaderDirection
    icon?: UIComponent<any>
}


export interface WebLoaderPropsBase extends DefaultLoaderProps {}

export type WebLoaderProps = WebLoaderPropsBase & UIComponentProps<"svg">

export interface AppLoaderProp extends DefaultLoaderProps {}

