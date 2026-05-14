import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps, UINode} from "mmcore";

export type TabSelectionType = "default" | "line"
export type TabOrientation = "horizontal" | "vertical";


export interface DefaultTabItemProps extends MMDefaultProps {
    labelContent: UINode
    tabId: string
    component: UINode
    isHidden?: boolean
    isDisabled?: boolean
}

export interface DefaultTabProps extends MMDefaultProps {
    items: unknown[]
    selectType?: TabSelectionType
    orientation?: TabOrientation
    defaultTabId?: string
}

export interface WebTabItemPropsBase extends DefaultTabItemProps {}
export type WebTabItemProps = WebTabItemPropsBase & UIComponentProps<"div">

export interface WebTabPropsBase extends DefaultTabProps {
    items: WebTabItemProps[]
}
export type WebTabProps = WebTabPropsBase & UIComponentProps<"div">