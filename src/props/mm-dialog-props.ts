import {MMDefaultProps} from "../common/mm-default-props";
import {UIComponentProps, UINode} from "mmcore";
import {ButtonSize, ButtonVariant} from "mmcore-ui";

export type DialogSlideFrom = "right" | "left" | "top" | "bottom";
export type DialogType = "dialog" | "drawer" | "alert";
export type DialogSize = "tiny" | "small" | "medium" | "large" | "full";


export interface DialogEngineOpenProps {
    title?: UINode
    subTitle?: UINode
    slideFrom?: DialogSlideFrom
}

export interface DialogEngineConfirmAlertProps {
    title?: UINode
    subTitle?: UINode
    body: UINode
    dialogSize?: DialogSize
}

export interface DefaultDialogEngineProps extends MMDefaultProps {
    open: (props: DialogEngineOpenProps) => void
    confirm: (props: DialogEngineConfirmAlertProps) => void
    close: () => void
    isOpen: boolean
    getActionValue: (dataKey: string, defaultData?: UINode) => UINode
}


export interface DefaultDialogProps extends MMDefaultProps {
    onOpenChange?(open: boolean): void
    open?: boolean
    modal?: boolean
    defaultOpen?: boolean
}

export interface DefaultDialogHeaderProps extends MMDefaultProps {}

export interface DefaultDialogFooterProps extends MMDefaultProps {}


export interface DefaultDialogBodyProps extends MMDefaultProps {
    type?: DialogType;
    slideFrom?: DialogSlideFrom;
    showCloseButton?: boolean
    dialogSize?: DialogSize
}

export interface DefaultDialogTitleProps extends MMDefaultProps {}

export interface DefaultDialogSubTitleProps extends MMDefaultProps {}


export interface DialogFooterActionButton {
    variant: ButtonVariant
    size?: ButtonSize
    label: UINode
    data?: unknown
    onClick: (data?: unknown) => void
}

export interface DefaultDialogGeneratorProps extends DefaultDialogBodyProps {
    header?: UINode
    footer?: UINode
    body: UINode
    title?: string
    subTitle?: string
    footerActionButtons?: DialogFooterActionButton[]
    modal?: boolean
}


export interface WebDialogEngineProps extends DefaultDialogEngineProps {}

export interface WebDialogPropsBase extends DefaultDialogProps {}
export type WebDialogProps = WebDialogPropsBase & UIComponentProps<"div">

export interface WebDialogHeaderPropsBase extends DefaultDialogHeaderProps {}
export type WebDialogHeaderProps = WebDialogHeaderPropsBase & UIComponentProps<"div">

export interface WebDialogFooterPropsBase extends DefaultDialogFooterProps {}
export type WebDialogFooterProps = WebDialogFooterPropsBase & UIComponentProps<"div">

export interface WebDialogBodyPropsBase extends DefaultDialogBodyProps {}
export type WebDialogBodyProps = WebDialogBodyPropsBase & UIComponentProps<"div">

export interface WebDialogTitlePropsBase extends DefaultDialogTitleProps {}
export type WebDialogTitleProps = WebDialogTitlePropsBase & UIComponentProps<"h2">

export interface WebDialogSubTitlePropsBase extends DefaultDialogSubTitleProps {}
export type WebDialogSubTitleProps = WebDialogSubTitlePropsBase & UIComponentProps<"p">

export interface WebDialogGeneratorPropsBase extends DefaultDialogGeneratorProps {
    engine: WebDialogEngineProps
}
export type WebDialogGeneratorProps = WebDialogGeneratorPropsBase & UIComponentProps<"div">