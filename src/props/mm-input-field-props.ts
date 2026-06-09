import {UIComponentProps} from "mmcore";
import {InputFieldPropsBase, InputType, WebDefaultInputFieldPropsBase} from "./mm-input-common-props";


export interface WebInputFieldPropsBase extends WebDefaultInputFieldPropsBase {
    type?: InputType
}

export interface WebInputNumberFieldPropsBase extends WebInputFieldPropsBase {
    step?: number | string | undefined
    min?: number | string | undefined
    max?: number | string | undefined
}

export type WebInputFieldProps = WebInputFieldPropsBase & UIComponentProps<"input"> & UIComponentProps<"textarea">
export type WebInputNumberFieldProps = WebInputNumberFieldPropsBase & UIComponentProps<"input">



export interface  AppInputFieldProps extends InputFieldPropsBase {}