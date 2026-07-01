import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {UIComponentProps} from "mmcore";
import {FieldValueType} from "./mm-field-engine-props";

export type CheckFieldType = "checkbox" | "switch";

export interface WebCheckFieldPropsBase extends WebDefaultInputFieldPropsBase {
    type?: CheckFieldType
    sendValue?: FieldValueType
}

export type WebCheckFieldProps = WebCheckFieldPropsBase &  Omit<UIComponentProps<"input">, "defaultValue">;