import {WebGridItemPropsBase} from "mmcore-ui";
import {UIComponentProps, UINode} from "mmcore";


export type InputFrameOrientation = "vertical" | "horizontal";

export interface SharedInputFrameProps extends WebGridItemPropsBase {
    label?: string
    labelNext?: UINode

    required?: boolean
    errorText?: string

    hintsText?: string
    isError?: boolean
}


export interface DefaultInputFrameProps extends SharedInputFrameProps {
    element: (labelKey: string) => UINode
    orientation?: InputFrameOrientation
    isChildFirst?: boolean
}


export interface WebInputFramePropsBase extends DefaultInputFrameProps {}

export type WebInputFrameProps = WebInputFramePropsBase & UIComponentProps<"div">

