import {SharedInputFrameProps} from "./mm-input-frame-props";
import {UIComponentProps} from "mmcore";
import {DefaultInputProps} from "./mm-input-props";


export interface DefaultInputFieldProps extends DefaultInputProps, SharedInputFrameProps {}

export interface WebInputFieldPropsBase extends DefaultInputFieldProps {
    inputClassName?: string
}

export type WebInputFieldProps = WebInputFieldPropsBase & UIComponentProps<"input">

