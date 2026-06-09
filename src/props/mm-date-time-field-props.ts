import {CalendarMonthYearSelection} from "./mm-calendar-props";
import {UIComponentProps} from "mmcore";
import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {PopoverPosition} from "./mm-popover-props";

export type DateInputType = "single" | "range"

export interface DefaultDateTimeFieldProps extends WebDefaultInputFieldPropsBase {
    valueFormat?: string
    displayFormat?: string
    monthYearSelection?: CalendarMonthYearSelection
    position?: PopoverPosition
    dateInputType?: DateInputType
}

export interface WebDateTimeFieldPropsBase extends DefaultDateTimeFieldProps{}

export type WebDateTimeFieldProps = WebDateTimeFieldPropsBase & UIComponentProps<"input">