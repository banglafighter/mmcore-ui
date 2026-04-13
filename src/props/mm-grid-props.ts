import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps} from "mmcore";


export type GridBase = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridGap = GridBase
export type GridColumnGap = GridBase
export type GridRowGap = GridBase
export type GridColumnSpan = GridBase | "full"
export type GridRowSpan = GridBase | "full"

export type GridColumnStart = GridBase
export type GridColumnEnd = GridBase

export type GridRowStart = GridBase
export type GridRowEnd = GridBase

export type GridColumn = GridBase
export type GridRow = GridBase

export type GridFlow = "row" | "column"


export interface DefaultGridProps extends MMDefaultProps {
    cols?: GridColumn
    rows?: GridRow
    flow?: GridFlow
    gap?: GridGap
    colGap?: GridColumnGap
    rowGap?: GridRowGap
}


export interface DefaultGridItemProps extends MMDefaultProps {
    colSpan?: GridColumnSpan
    rowSpan?: GridRowSpan
    colStart?: GridColumnStart
    colEnd?: GridColumnEnd
    rowStart?: GridRowStart
    rowEnd?: GridRowEnd
}

export interface WebGridPropsBase extends DefaultGridProps {
    colsMob?: GridColumn // Mobile
    colsTab?: GridColumn // Tablet
    colsLarge?: GridColumn // Large Screen

    rowsMob?: GridRow // Mobile
    rowsTab?: GridRow // Tablet
    rowsLarge?: GridRow // Large Screen

    gapMob?: GridGap // Mobile
    gapTab?: GridGap // Tablet
}

export type WebGridProps = WebGridPropsBase & UIComponentProps<"div">

export interface WebGridItemPropsBase extends DefaultGridItemProps {
    colSpanMob?: GridColumnSpan // Mobile
    colSpanTab?: GridColumnSpan // Tablet
    colSpanLarge?: GridColumnSpan // Large Screen

    rowSpanMob?: GridRowSpan // Mobile
    rowSpanTab?: GridRowSpan // Tablet
    rowSpanLarge?: GridRowSpan // Large Screen

    colStartMob?: GridColumnStart // Mobile
    colStartTab?: GridColumnStart // Tablet
    colStartLarge?: GridColumnStart // Large Screen

    colEndMob?: GridColumnEnd // Mobile
    colEndTab?: GridColumnEnd // Tablet
    colEndLarge?: GridColumnEnd // Large Screen

    rowStartMob?: GridRowStart // Mobile
    rowStartTab?: GridRowStart // Tablet
    rowStartLarge?: GridRowStart // Large Screen

    rowEndMob?: GridRowEnd // Mobile
    rowEndTab?: GridRowEnd // Tablet
    rowEndLarge?: GridRowEnd // Large Screen
}

export type WebGridItemProps = WebGridItemPropsBase & UIComponentProps<"div">