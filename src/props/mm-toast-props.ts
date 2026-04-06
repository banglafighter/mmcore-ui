import {FlexibleType, MMDefaultProps} from "./mm-default-props";

export type DefaultToastPosition = "top" | "bottom"
export type DefaultToastType = "success" | "error" | "info"
export type DefaultToastTheme = 'light' | 'dark' | 'auto';
export type DefaultToastTransition = 'default'

export type WebToastPosition = DefaultToastPosition | "topRight" | "topLeft" | "bottomRight" | "bottomLeft"
export type WebToastType = DefaultToastType | 'warning'
export type WebToastTheme = DefaultToastTheme
export type WebToastTransition = DefaultToastTransition | 'bounce' | 'slide' | 'zoom' | 'flip';

export type AppToastPosition = DefaultToastPosition
export type AppToastType = DefaultToastType
export type AppToastTheme = DefaultToastTheme
export type AppToastTransition = DefaultToastTransition;

export interface DefaultToastProps extends MMDefaultProps {
    autoHide?: boolean
    visibilityTimeMS?: number
}

export interface DefaultToastActionProps extends MMDefaultProps {
    onClose?: (actionData?: FlexibleType) => void;
    onAction?: (actionData?: FlexibleType) => void;
    actionData?: FlexibleType
    autoHide?: boolean
    visibilityTimeMS?: number
    message: string
}

export interface WebToastProps extends DefaultToastProps {
    position?: WebToastPosition;
    theme?: WebToastTheme;
    transition?: WebToastTransition;
    pauseOnFocusLoss?: boolean;
    pauseOnHover?: boolean;
}

export interface WebToastActionProps extends DefaultToastActionProps {
    type: WebToastType;
    position?: WebToastPosition;
    theme?: WebToastTheme;
    transition?: WebToastTransition;
}


export interface AppToastProps extends DefaultToastProps {
    position?: AppToastPosition;
    theme?: AppToastTheme;
    transition?: AppToastTransition;
    swipeToClose?: boolean;
}

export interface AppToastActionProps extends DefaultToastActionProps {
    type: AppToastType;
    position?: AppToastPosition;
    theme?: AppToastTheme;
    transition?: AppToastTransition;
    swipeToClose?: boolean;
}