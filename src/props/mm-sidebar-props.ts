import {UIComponentProps, UINode} from "mmcore";
import {MMDefaultProps} from "./../common/mm-default-props";

export type SidebarMenuItemSize = "default" | "small" | "large"
export type SidebarMenuItemVariant = "default" | "outline"
export type DefaultSidebarContentState = "expanded" | "collapsed"
export type SidebarSide = "left" | "right"
export type SidebarVariant = "sidebar" | "floating" | "inset"
export type SidebarCollapsible = "offcanvas" | "icon" | "none"


export interface SidebarMenuItemBaseProps {
    menuContent: UINode
    menuContentAttrs?: UIComponentProps<"li">
    menuNext?: UINode
    menuNextShowOnHover?: boolean
    menuNextAttrs?: UIComponentProps<"div">
    actionData?: unknown
    action?: (actionData?: unknown) => void
    variant?: SidebarMenuItemVariant
    size?: SidebarMenuItemSize
    hideMe?: boolean
    separator?: boolean
}

export interface SidebarNestedMenuProps extends SidebarMenuItemBaseProps {
    nested?: SidebarMenuItemBaseProps[]
    collapsible?: boolean
}

export interface SidebarGroupMenuProps {
    labelContent: UINode
    items: SidebarNestedMenuProps[]
}

export interface SidebarMenuItemProps {
    grouped?: SidebarGroupMenuProps
    single?: SidebarNestedMenuProps[]
}

export interface DefaultSidebarProps extends MMDefaultProps {
    header?: UINode
    footer?: UINode
    body?: UINode
    menuBefore?: UINode
    menuAfter?: UINode
    menu?: SidebarMenuItemProps[]
    side?: SidebarSide
    collapsible?: SidebarCollapsible
    variant?: SidebarVariant
}

export interface WebSidebarPropsBase extends DefaultSidebarProps {
    headerAttrs?: UIComponentProps<"div">
    footerAttrs?: UIComponentProps<"div">
    bodyAttrs?: UIComponentProps<"div">
}


export interface DefaultSidebarContexProps {
    stateName: DefaultSidebarContentState
    currentOpenState: boolean
    mobileOpenState: boolean
    setMobileOpenState: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
    sidebarWidth: string
    sidebarWidthMobile: string
    sidebarIconWidth: string
}

export interface DefaultSidebarProviderProps {
    stateStoreName?: string
    sidebarWidth?: string
    sidebarWidthMobile?: string
    sidebarIconWidth?: string
    sidebarShortcutKey?: string

    defaultState?: DefaultSidebarContentState
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
}

export interface DefaultSidebarProviderPropsBase extends DefaultSidebarProviderProps {}

export interface DefaultSidebarTogglerProps {
    iconContent?: UINode
}

export interface WebSidebarTogglerPropsBase extends DefaultSidebarTogglerProps {
    onClick?: () => void
}

export interface DefaultSidebarContentProps {}

export interface WebSidebarContentPropsBase extends DefaultSidebarContentProps {}


export interface WebSidebarContexProps extends DefaultSidebarContexProps {}
export type WebSidebarProviderProps = DefaultSidebarProviderPropsBase & UIComponentProps<"div">
export type WebSidebarProps = WebSidebarPropsBase & UIComponentProps<"div">
export type WebSidebarTogglerProps = WebSidebarTogglerPropsBase & UIComponentProps<"div">
export type WebSidebarContentProps = WebSidebarContentPropsBase & UIComponentProps<"div">

