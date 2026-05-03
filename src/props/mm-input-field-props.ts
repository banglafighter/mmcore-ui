import {UIComponentProps} from "mmcore";
import {InputFieldPropsBase, InputType} from "./mm-input-common-props";


export interface DefaultInputFieldProps extends InputFieldPropsBase {}

export interface WebInputFieldPropsBase extends DefaultInputFieldProps {
    type?: InputType
    inputClassName?: string
}

export type WebInputFieldProps = WebInputFieldPropsBase & UIComponentProps<"input">

