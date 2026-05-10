import {MMDefaultProps} from "./../common/mm-default-props";
import {UIComponentProps, UINode} from "mmcore";

export type DropdownPosition = "start" | "center" | "end"
export type DropdownSize = "default" | "small"
export type DropdownItemVariant = "default" | "danger"


export interface DropdownItemBaseProps {
    nameContent: UINode
    shortcut?: string
    actionData?: any
    action?: (actionData?: any) => void
    variant?: DropdownItemVariant
    hideMe?: boolean
    separator?: boolean
}

export interface DropdownItemProps extends DropdownItemBaseProps {
    nested?: Array<DropdownItemProps>
    group?: Array<DropdownItemProps>
}

export interface DefaultDropdownProps extends MMDefaultProps {
    trigger: UINode
    items: DropdownItemProps[]
    size?: DropdownSize
    position?: DropdownPosition
    onOpenChange?(open: boolean): void
    open?: boolean
}

export interface WebDropdownPropsBase extends DefaultDropdownProps {}

export type WebDropdownProps = WebDropdownPropsBase & UIComponentProps<"div">