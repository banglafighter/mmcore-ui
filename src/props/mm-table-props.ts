import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps, UINode} from "mmcore";

export type SortDirection = 'asc' | 'desc'

export interface DefaultTableProps extends MMDefaultProps {}
export interface DefaultTHeaderProps extends MMDefaultProps {}
export interface DefaultTFootProps extends MMDefaultProps {}
export interface DefaultTBodyProps extends MMDefaultProps {}
export interface DefaultTRProps extends MMDefaultProps {}
export interface DefaultTHProps extends MMDefaultProps {}
export interface DefaultTDProps extends MMDefaultProps {}

export interface WebTablePropsBase extends DefaultTableProps {}
export interface WebTHeadPropsBase extends DefaultTHeaderProps {}
export interface WebTFootPropsBase extends DefaultTFootProps {}
export interface WebTBodyPropsBase extends DefaultTBodyProps {}
export interface WebTRPropsBase extends DefaultTRProps {}
export interface WebTHPropsBase extends DefaultTHProps {}
export interface WebTDPropsBase extends DefaultTDProps {}

export type WebTableProps = WebTablePropsBase & UIComponentProps<"table">;
export type WebTHeadProps = WebTHeadPropsBase & UIComponentProps<"thead">;
export type WebTFootProps = WebTFootPropsBase & UIComponentProps<"tfoot">;
export type WebTBodyProps = WebTBodyPropsBase & UIComponentProps<"tbody">;
export type WebTRProps = WebTRPropsBase & UIComponentProps<"tr">;
export type WebTHProps = WebTHPropsBase & UIComponentProps<"th">;
export type WebTDProps = WebTDPropsBase & UIComponentProps<"td">;


export interface DefaultTableGeneratorColumnProps extends MMDefaultProps {
    headerContent?: UINode
    columnName: string
    sortable?: boolean
    isHidden?: boolean
    customize?: (row: Record<string, UINode>, dataList: Record<string, UINode>[], columnName: string, headerContent?: UINode) => UINode
}

export interface DefaultTableGeneratorProps extends MMDefaultProps {
    enablePagination?: boolean
    onChangeItemPerPage?: (itemPerPage: number) => void
    onChangePagination?: (pageNumber: number, itemPerPage: number) => void
    itemPerPageOptions?: Record<string, number>[]

    renderRow?: (row: Record<string, UINode>, dataList: Record<string, UINode>[], columns: DefaultTableGeneratorColumnProps[], index: number) => UINode
    isExternalRow?: boolean
    skipRenderedRow?: boolean

    sortAscIcon?: UINode
    sortDescIcon?: UINode
    sortIcon?: UINode
}

export interface DefaultTableEngineProps {
    registerColumns(columns: (columns: DefaultTableGeneratorColumnProps[]) => DefaultTableGeneratorColumnProps[]): DefaultTableGeneratorColumnProps[]
    loadData(data: Record<string, UINode>[]): void
    dataList: Record<string, UINode>[]
    getColumns: () => DefaultTableGeneratorColumnProps[]
}

export interface WebTableGeneratorColumnProps extends DefaultTableGeneratorColumnProps {
    columnClassName?: string
}

export interface  WebTableGeneratorPropsBase extends DefaultTableGeneratorProps {
    engine: WebTableEngineProps
    onClickSort?: (sortDirection: SortDirection, columnName: string) => void;
    renderRow?: (row: Record<string, UINode>, dataList: Record<string, UINode>[], columns: WebTableGeneratorColumnProps[], index: number) => UINode
    externalRowWrapperClassName?: string
}

export type WebTableGeneratorProps = WebTableGeneratorPropsBase & UIComponentProps<"div">;


export interface WebTableEngineProps extends DefaultTableEngineProps {
    registerColumns(columns: (columns: WebTableGeneratorColumnProps[]) => WebTableGeneratorColumnProps[]): WebTableGeneratorColumnProps[]
    getColumns: () => WebTableGeneratorColumnProps[]
    addDynamicColumns: (columns: (columns: Record<string, WebTableGeneratorColumnProps>) => Record<string, WebTableGeneratorColumnProps>) => void
}