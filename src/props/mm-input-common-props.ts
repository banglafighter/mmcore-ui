import {MMDefaultProps, WebGridItemPropsBase} from "mmcore-ui";
import {MixType, UINode} from "mmcore";

export type InputType = "text" | "password"

export interface InputDataValidator {
    validate(name: string, value: MixType, values: Record<string, MixType>): boolean
}

export interface InputPropsBase extends MMDefaultProps {
    name: string
}

export interface InputFramePropsBase extends WebGridItemPropsBase {
    label?: string
    labelNext?: UINode

    required?: boolean
    errorText?: string

    hintsText?: string
    isError?: boolean
}


export interface InputFieldPropsBase extends InputPropsBase, InputFramePropsBase {
    validator?: InputDataValidator
    hideMe?: boolean
}