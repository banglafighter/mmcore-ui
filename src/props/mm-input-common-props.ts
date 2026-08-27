import {MMDefaultProps} from "./../common/mm-default-props";
import {MixType, UINode} from "mmcore";
import {FieldValueType, WebFieldEngineProps} from "./mm-field-engine-props";
import { WebGridItemPropsBase } from "./mm-grid-props";


export type InputType = "text" | "textarea" | "password" | "email" | "search" | "number" | "time"
export type AllInputType = InputType | "radio" | "checkbox" | "select" | "file" | "date";

export interface InputDataValidator {
    validate(name: string, value: FieldValueType, values: Record<string, FieldValueType>, field: InputFieldPropsBase): boolean
}

export interface InputPropsBase extends MMDefaultProps {
    name: string
}

export interface InputFramePropsBase extends WebGridItemPropsBase {
    label?: string | UINode
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
    defaultValue?: FieldValueType
}

export interface WebDefaultInputFieldPropsBase extends InputFieldPropsBase {
    inputClassName?: string
    engine?: WebFieldEngineProps
}