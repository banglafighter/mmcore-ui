import {UIComponentProps} from "mmcore";
import {InputPropsBase, InputType} from "./mm-input-common-props";


export interface DefaultInputProps extends InputPropsBase {
    type: InputType
}

export interface WebInputPropsBase extends DefaultInputProps {}

export type WebInputProps = WebInputPropsBase & UIComponentProps<"input">

