import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {UIComponentProps} from "mmcore";

export type CheckFieldType = "checkbox" | "switch";

export interface WebCheckFieldPropsBase extends WebDefaultInputFieldPropsBase {
    type?: CheckFieldType
}

export type WebCheckFieldProps = WebCheckFieldPropsBase & UIComponentProps<"input">