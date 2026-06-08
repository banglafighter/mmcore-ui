import {MMDefaultProps} from "./../common/mm-default-props";
import {MixType, UINode} from "mmcore";
import {WebFieldEngineProps} from "./mm-field-engine-props";
import { WebGridItemPropsBase } from "./mm-grid-props";


export type InputType = "text" | "textarea" | "password" | "email" | "search" | "number"
export type AllInputType = InputType | "radio" | "checkbox" | "select" | "file";

export interface InputDataValidator {
    validate(name: string, value: MixType, values: Record<string, MixType>, field: InputFieldPropsBase): boolean
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
    isHidden?: boolean
    specType?: AllInputType
    defaultValue?: MixType | Array<any>
}

export interface WebDefaultInputFieldPropsBase extends InputFieldPropsBase {
    inputClassName?: string
    engine?: WebFieldEngineProps
}