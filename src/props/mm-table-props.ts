import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps, UINode} from "mmcore";


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
    customize?: (row: Record<string, UINode>, data: Record<string, UINode>[], fieldName?: string, headerContent?: UINode) => UINode
}

export interface DefaultTableGeneratorProps extends MMDefaultProps {
    columns?: unknown[]
    data?: Record<string, UINode>
    enablePagination?: boolean
    onChangeItemPerPage?: (itemPerPage: number) => void
    onChangePagination?: (pageNumber: number, itemPerPage: number) => void
    itemPerPageOptions?: Record<string, number>[]
}

export interface DefaultTableEngineProps {
    registerColumns(columns: (columns: DefaultTableGeneratorColumnProps[]) => DefaultTableGeneratorColumnProps[]): DefaultTableGeneratorColumnProps[]
    loadData(data: Record<string, UINode>[]): void
    dataList: Record<string, UINode>[]
}

export interface WebTableGeneratorColumnProps extends DefaultTableGeneratorColumnProps {
    thClassName?: string
    tdClassName?: string
}

export interface WebTableGeneratorPropsBase extends DefaultTableGeneratorProps {
    columns?: WebTableGeneratorColumnProps[]
    engine: WebTableEngineProps
}

export type WebTableGeneratorProps = WebTableGeneratorPropsBase & UIComponentProps<"div">;


export interface WebTableEngineProps extends DefaultTableEngineProps {
    registerColumns(columns: (columns: WebTableGeneratorColumnProps[]) => WebTableGeneratorColumnProps[]): WebTableGeneratorColumnProps[]
}