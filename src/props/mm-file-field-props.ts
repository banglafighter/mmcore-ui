import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {UIComponentProps, UINode} from "mmcore";

export interface FileFieldAcceptFile {
    [key: string]: readonly string[];
}

export interface WebFileFieldPropsBase extends WebDefaultInputFieldPropsBase {
    minSize?: number
    maxSize?: number
    maxFiles?: number
    multiple?: boolean
    acceptFile?: FileFieldAcceptFile
    centerContent?: UINode
}

export type WebFileFieldProps = WebFileFieldPropsBase & UIComponentProps<"input">
