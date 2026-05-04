import {MMDefaultProps} from "./../common/mm-default-props";
import {UIComponentProps, UINode} from "mmcore";
import {WebInputFieldProps} from "./mm-input-field-props";

export type FieldGroupType = "text" | "textarea"
export type FieldGroupItemType = "text" | "node"


export interface DefaultFieldGroupItemProps extends MMDefaultProps {
    itemType: FieldGroupItemType
    content: UINode
}

export interface DefaultFieldGroupProps extends MMDefaultProps {
    groupType: FieldGroupType
    startOrTopItems?: Array<unknown>
    endOrButtonItems?: Array<unknown>
}


export type WebFieldGroupItemProps = DefaultFieldGroupItemProps & UIComponentProps<"div">

export interface WebFieldGroupPropsBase extends DefaultFieldGroupProps {
    startItems?: Array<WebFieldGroupItemProps>
    endItems?: Array<WebFieldGroupItemProps>
}

export type WebFieldGroupProps = WebFieldGroupPropsBase & Omit<WebInputFieldProps, "specType">
