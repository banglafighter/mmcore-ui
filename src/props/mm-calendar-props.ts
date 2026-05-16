import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps} from "mmcore";

export type CalendarSelectionMode = "single" | "multiple" | "range";
export type CalendarMonthYearSelection =  "label" | "dropdown" | "dropdown-months" | "dropdown-years";
export type OnSelectHandler<T> = (selected: T, triggerDate: Date) => void;
export type FormatterFn = (...args: unknown[]) => unknown;
export type Formatters = Record<string, FormatterFn>;
export type CustomComponents = Record<string, FormatterFn>;

export interface DefaultCalendarProps extends MMDefaultProps {
    selectionMode?: CalendarSelectionMode
    monthYearSelection?: CalendarMonthYearSelection
    onSelect?: OnSelectHandler<Date | Date[] | undefined>
    selected?: Date | Date[] | undefined
    numberOfMonths?: number
    timeZone?: string | undefined
    formatters?: Partial<Formatters>
    components?: Partial<CustomComponents>
}

export interface WebCalendarPropsBase extends DefaultCalendarProps{}

export type WebCalendarProps = WebCalendarPropsBase & UIComponentProps<"div">