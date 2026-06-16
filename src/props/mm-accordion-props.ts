import {MMDefaultProps} from "../common/mm-default-props"
import {UIComponentProps, UINode} from "mmcore";

export type AccordionSelectionType = "single" | "multiple"

export interface DefaultAccordionItemProps extends MMDefaultProps {
    accordionId: string
    labelContent: UINode
    component: UINode
    isHidden?: boolean
    isDisabled?: boolean
}

export interface DefaultAccordionProps extends MMDefaultProps {
    selectType?: AccordionSelectionType
    defaultAccordionId?: string
    items: unknown[]
}

export interface WebAccordionItemPropsBase extends DefaultAccordionItemProps {
    componentClassName?: string
    headerClassName?: string
    itemClassName?: string
}

export type WebAccordionItemProps = WebAccordionItemPropsBase & UIComponentProps<"div">

export interface WebAccordionPropsBase extends DefaultAccordionProps {
    items: WebAccordionItemProps[]
}

export type WebAccordionProps = WebAccordionPropsBase & UIComponentProps<"div">