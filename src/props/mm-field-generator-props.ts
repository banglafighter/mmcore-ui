import {UIComponentProps} from "mmcore";
import { WebFieldEngineProps } from "./mm-field-engine-props";
import {DefaultGridItemProps, WebGridPropsBase} from "./mm-grid-props";

export type FieldGeneratorLayout = "grid"

export interface DefaultFieldGeneratorProps extends DefaultGridItemProps {
    engine: unknown
    layout?: FieldGeneratorLayout
    extraConfig?: Record<string, any>
}

export interface WebFieldGeneratorPropsBase extends WebGridPropsBase, DefaultFieldGeneratorProps {
    engine: WebFieldEngineProps
}

export type WebFieldGeneratorProps = WebFieldGeneratorPropsBase & UIComponentProps<"div">

