import {MMDefaultProps} from "../common/mm-default-props";
import {MixType, UIComponentProps, UINode} from "mmcore";

export type ItemPerPageOptionsData = Record<string, MixType> & {
    label: string | number
    value: number
}

export const itemPerPageDefaultOptions: ItemPerPageOptionsData[] = [
    {"label": 25, "value": 25},
    {"label": 50, "value": 50},
    {"label": 100, "value": 100},
    {"label": 500, "value": 500},
]

export interface DefaultPaginationProps extends MMDefaultProps {
    totalPage: number
    currentPage: number
    itemPerPage: number
    siblingCount?: number
    onChangePagination?: (pageNumber: number) => void;
    onChangeItemPerPage?: (itemPerPage: number) => void;
    itemPerPageOptions?: ItemPerPageOptionsData[]
    itemPerPageOptionValue?: number
    nextIcon?: UINode
    previousIcon?: UINode
    ellipsisIcon?: UINode
}

export interface WebPaginationPropsBase extends DefaultPaginationProps {}
export type WebPaginationProps = WebPaginationPropsBase & UIComponentProps<"div">