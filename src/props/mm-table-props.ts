import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps} from "mmcore";


export interface DefaultTableProps extends MMDefaultProps {}
export interface DefaultTHeaderProps extends MMDefaultProps {}
export interface DefaultTFootProps extends MMDefaultProps {}
export interface DefaultTBodyProps extends MMDefaultProps {}
export interface DefaultTRProps extends MMDefaultProps {}
export interface DefaultTHProps extends MMDefaultProps {}
export interface DefaultTDProps extends MMDefaultProps {}

export interface WebTablePropsBase extends DefaultTableProps {}
export interface WebTHeadPropsBase extends DefaultTHeaderProps {}
export interface WebTFootPropsBase extends DefaultTFootProps {}
export interface WebTBodyPropsBase extends DefaultTBodyProps {}
export interface WebTRPropsBase extends DefaultTRProps {}
export interface WebTHPropsBase extends DefaultTHProps {}
export interface WebTDPropsBase extends DefaultTDProps {}

export type WebTableProps = WebTablePropsBase & UIComponentProps<"table">;
export type WebTHeadProps = WebTHeadPropsBase & UIComponentProps<"thead">;
export type WebTFootProps = WebTFootPropsBase & UIComponentProps<"tfoot">;
export type WebTBodyProps = WebTBodyPropsBase & UIComponentProps<"tbody">;
export type WebTRProps = WebTRPropsBase & UIComponentProps<"tr">;
export type WebTHProps = WebTHPropsBase & UIComponentProps<"th">;
export type WebTDProps = WebTDPropsBase & UIComponentProps<"td">;