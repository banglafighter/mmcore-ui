import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {UIComponentProps, UIElement, UINode} from "mmcore";

export enum FileMimeTypes {
    Image = "image/",
    Video = "video/",
    Audio = "audio/",
    Text = "text/",
    Application = "application/",
    Font = "font/"
}

export interface FileFieldAcceptFile {
    [key: string]: readonly string[];
}

export interface WebFileFieldPropsBase extends WebDefaultInputFieldPropsBase {
    minSize?: number // Bytes
    maxSize?: number // Bytes
    maxFiles?: number
    multiple?: boolean
    mimeType?: FileMimeTypes
    acceptFileExtensions?: string[] // ["jpg", "png", "jpeg"]
    centerContent?: UINode
    preview?: (multiple: boolean, isFile: boolean, files: File | File[] | string | string[]) => UINode | UIElement
}

export type WebFileFieldProps = WebFileFieldPropsBase & UIComponentProps<"input">
