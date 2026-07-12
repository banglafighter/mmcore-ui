import {MMDefaultProps} from "./../common/mm-default-props";
import {UIComponentProps, UINode} from "mmcore";

export type DropdownPosition = "start" | "center" | "end"
export type DropdownSize = "default" | "small"
export type DropdownSide = "top" | "right" | "bottom" | "left"
export type DropdownItemVariant = "default" | "danger"


export interface DropdownItemBaseProps {
    nameContent: UINode
    shortcut?: string
    actionData?: unknown
    action?: (actionData?: unknown) => void
    variant?: DropdownItemVariant
    isHidden?: boolean
    separator?: boolean
    isRawContent?: boolean
}

export interface DropdownItemProps extends DropdownItemBaseProps {
    nested?: Array<DropdownItemProps>
    group?: Array<DropdownItemProps>
}

export interface DefaultDropdownProps extends MMDefaultProps {
    trigger: UINode
    items: DropdownItemProps[]
    size?: DropdownSize
    side?: DropdownSide
    position?: DropdownPosition
    onOpenChange?(open: boolean): void
    open?: boolean
}

export interface WebDropdownPropsBase extends DefaultDropdownProps {
    contentClassName?: string
}

export type WebDropdownProps = WebDropdownPropsBase & UIComponentProps<"div">