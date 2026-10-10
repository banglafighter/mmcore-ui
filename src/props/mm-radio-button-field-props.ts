import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {UIComponentProps} from "mmcore";


export type RadioButtonGroupVariant = "segmented" | "status" | "cards" | "stacked";
export type RadioButtonGroupSize = "small" | "medium" | "large";

export interface RadioButtonGroupOption {
    label: string;
    value: string;
    subtitle?: string;
    icon?: any;
    selectedColor?: string;
    disabled?: boolean;
}

export interface WebRadioButtonFieldPropsBase extends WebDefaultInputFieldPropsBase {
    options: RadioButtonGroupOption[];
    variant?: RadioButtonGroupVariant;
    size?: RadioButtonGroupSize;
    orientation?: "horizontal" | "vertical";
    fullWidth?: boolean;
    selectedColor?: string;
}

export type WebRadioButtonFieldProps = WebRadioButtonFieldPropsBase & Omit<UIComponentProps<"input">, "defaultValue" | "size">;