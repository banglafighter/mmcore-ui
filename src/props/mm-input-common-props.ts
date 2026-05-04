import {MMDefaultProps, WebGridItemPropsBase} from "mmcore-ui";
import {MixType, UINode} from "mmcore";
import {WebFieldEngineProps} from "./mm-field-engine-props";


export type InputType = "text" | "password"
export type AllInputType = InputType | "textarea" | "radio" | "checkbox" | "select" | "file";

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
    specType?: AllInputType
    defaultValue?: MixType
}

export interface WebDefaultInputFieldPropsBase extends InputFieldPropsBase {
    inputClassName?: string
    engine?: WebFieldEngineProps
}