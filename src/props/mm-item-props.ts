import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps} from "mmcore";

export type ItemVariation = "default" | "outline" | "muted"
export type ItemSize = "default" | "sm"
export type ItemMediaVariation = "default" | "icon" | "image"

export interface DefaultItemProps extends MMDefaultProps {
    variant?: ItemVariation
    size?: ItemSize
}

export interface DefaultItemBodyProps extends MMDefaultProps {}

export interface DefaultItemTitleProps extends MMDefaultProps {}

export interface DefaultItemSubTitleProps extends MMDefaultProps {}

export interface DefaultItemActionProps extends MMDefaultProps {}

export interface DefaultItemMediaProps extends MMDefaultProps {
    variant?: ItemMediaVariation
}

export interface WebItemPropsBase extends DefaultItemProps {}
export type WebItemProps = WebItemPropsBase & UIComponentProps<"div">

export interface WebItemBodyPropsBase extends DefaultItemBodyProps {}
export type WebItemBodyProps = WebItemBodyPropsBase & UIComponentProps<"div">

export interface WebItemTitlePropsBase extends DefaultItemTitleProps {}
export type WebItemTitleProps = WebItemTitlePropsBase & UIComponentProps<"div">

export interface WebItemSubTitlePropsBase extends DefaultItemSubTitleProps {}
export type WebItemSubTitleProps = WebItemSubTitlePropsBase & UIComponentProps<"div">

export interface WebItemActionPropsBase extends DefaultItemActionProps {}
export type WebItemActionProps = WebItemActionPropsBase & UIComponentProps<"div">

export interface WebItemMediaPropsBase extends DefaultItemMediaProps {}
export type WebItemMediaProps = WebItemMediaPropsBase & UIComponentProps<"div">
