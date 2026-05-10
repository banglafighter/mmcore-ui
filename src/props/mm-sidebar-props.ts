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
    menuNext?: UINode
    actionData?: unknown
    action?: (actionData?: unknown) => void
    variant?: SidebarMenuItemVariant
    size?: SidebarMenuItemSize
    hideMe?: boolean
    separator?: boolean
}

export interface SidebarMenuItemProps extends SidebarMenuItemBaseProps {
    group?: SidebarMenuItemProps[]
    nested?: SidebarMenuItemBaseProps[]
}

export interface DefaultSidebarProps extends MMDefaultProps {
    header?: UINode
    footer?: UINode
    body?: UINode
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
    // state: DefaultSidebarContentState
    // isOpen: boolean
    // setOpen: (open: boolean) => void
    // openMobile: boolean
    // setOpenMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
}

export interface DefaultSidebarProviderProps {
    cookieName?: string
    cookieMaxAge?: number
    sidebarWidth?: string
    sidebarWidthMobile?: string
    sidebarIconWidth?: string
    sidebarShortcutKey?: string

    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
}

export interface DefaultSidebarProviderPropsBase extends DefaultSidebarProviderProps {}

export interface DefaultSidebarTogglerProps {}

export interface WebSidebarTogglerPropsBase extends DefaultSidebarTogglerProps {}

export interface DefaultSidebarContentProps {}

export interface WebSidebarContentPropsBase extends DefaultSidebarContentProps {}


export interface WebSidebarContexProps extends DefaultSidebarContexProps {}
export type WebSidebarProviderProps = DefaultSidebarProviderPropsBase & UIComponentProps<"div">
export type WebSidebarProps = WebSidebarPropsBase & UIComponentProps<"div">
export type WebSidebarTogglerProps = WebSidebarTogglerPropsBase & UIComponentProps<"div">
export type WebSidebarContentProps = WebSidebarContentPropsBase & UIComponentProps<"div">

