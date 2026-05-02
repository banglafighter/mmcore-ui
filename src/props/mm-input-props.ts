import {MMDefaultProps} from "mmcore-ui";
import {UIComponentProps} from "mmcore";

export type InputType = "text" | "password"


export interface DefaultInputProps extends MMDefaultProps {
    type: InputType
}

export interface WebInputPropsBase extends DefaultInputProps {}

export type WebInputProps = WebInputPropsBase & UIComponentProps<"input">

