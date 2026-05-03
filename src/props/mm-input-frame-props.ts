import {UIComponentProps, UINode} from "mmcore";
import {InputFramePropsBase} from "./mm-input-common-props";


export type InputFrameOrientation = "vertical" | "horizontal";

export interface DefaultInputFrameProps extends InputFramePropsBase {
    element: (labelKey: string) => UINode
    orientation?: InputFrameOrientation
    isChildFirst?: boolean
}


export interface WebInputFramePropsBase extends DefaultInputFrameProps {}

export type WebInputFrameProps = WebInputFramePropsBase & UIComponentProps<"div">

