import {UIComponentProps} from "mmcore";
import {InputPropsBase} from "./mm-input-common-props";


export interface DefaultTextareaProps extends InputPropsBase {}

export interface WebTextareaPropsBase extends DefaultTextareaProps {}

export type WebTextareaProps = WebTextareaPropsBase & UIComponentProps<"textarea">

