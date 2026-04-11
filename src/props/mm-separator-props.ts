import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps} from "mmcore";

export type SeperatorOrientation = 'horizontal' | 'vertical'

export interface DefaultSeperatorProps extends MMDefaultProps {
    orientation?: SeperatorOrientation
}

export interface WebSeperatorPropsBase extends DefaultSeperatorProps {}

export type WebSeperatorProps = WebSeperatorPropsBase & UIComponentProps<"div">


export interface AppSeperatorProps extends DefaultSeperatorProps {}