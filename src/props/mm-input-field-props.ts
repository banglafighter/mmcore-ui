import {UIComponentProps} from "mmcore";
import {InputFieldPropsBase, InputType, WebDefaultInputFieldPropsBase} from "./mm-input-common-props";


export interface WebInputFieldPropsBase extends WebDefaultInputFieldPropsBase {
    type?: InputType
}

export type WebInputFieldProps = WebInputFieldPropsBase & UIComponentProps<"input"> & UIComponentProps<"textarea">



export interface  AppInputFieldProps extends InputFieldPropsBase {}