import {MMDefaultProps} from "./../common/mm-default-props";
import {UIComponentProps, UINode} from "mmcore";

export type PopoverPosition = "start" | "center" | "end"

export interface DefaultPopoverProps extends MMDefaultProps {
    trigger: UINode
    body: UINode
    title?: UINode
    subTitle?: UINode
    position?: PopoverPosition
}


export interface WebPopoverPropsBase extends DefaultPopoverProps {}
export type WebPopoverProps = WebPopoverPropsBase & UIComponentProps<"div">