import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps} from "mmcore";


export interface DefaultCardProps extends MMDefaultProps {}

export interface DefaultCardHeaderProps extends MMDefaultProps {}

export interface DefaultCardFooterProps extends MMDefaultProps {}

export interface DefaultCardBoydProps extends MMDefaultProps {}

export interface DefaultCardTitleProps extends MMDefaultProps {}

export interface DefaultCardSubTitleProps extends MMDefaultProps {}

export interface DefaultCardActionProps extends MMDefaultProps {}


export interface WebCardPropsBase extends DefaultCardProps {}
export type WebCardProps = WebCardPropsBase & UIComponentProps<"div">

export interface WebCardHeaderPropsBase extends DefaultCardHeaderProps {}
export type WebCardHeaderProps = WebCardHeaderPropsBase & UIComponentProps<"div">

export interface WebCardFooterPropsBase extends DefaultCardFooterProps {}
export type WebCardFooterProps = WebCardFooterPropsBase & UIComponentProps<"div">

export interface WebCardBodyPropsBase extends DefaultCardBoydProps {}
export type WebCardBodyProps = WebCardBodyPropsBase & UIComponentProps<"div">

export interface WebCardTitlePropsBase extends DefaultCardTitleProps {}
export type WebCardTitleProps = WebCardTitlePropsBase & UIComponentProps<"div">

export interface WebCardSubTitlePropsBase extends DefaultCardSubTitleProps {}
export type WebCardSubTitleProps = WebCardSubTitlePropsBase & UIComponentProps<"div">

export interface WebCardActionPropsBase extends DefaultCardActionProps {}
export type WebCardActionProps = WebCardActionPropsBase & UIComponentProps<"div">


export interface AppCardProps extends DefaultCardProps {}

export interface AppCardHeaderProps extends DefaultCardHeaderProps {}

export interface AppCardFooterProps extends DefaultCardFooterProps {}

export interface AppCardBodyProps extends DefaultCardBoydProps {}

export interface AppCardTitleProps extends DefaultCardTitleProps {}

export interface AppCardSubTitleProps extends DefaultCardSubTitleProps {}

export interface AppCardActionProps extends DefaultCardActionProps {}