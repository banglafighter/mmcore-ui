import {MixType} from "mmcore";
import {WebFieldSpec} from "./mm-field-spec";
import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {WebInputFieldProps} from "./mm-input-field-props";

export type InputElementType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement


export interface WebFieldEngineProps {
    registerInputs: (inputs: (spec: WebFieldSpec) => WebFieldSpec) => WebFieldSpec
    registerRefs: (name: string, element: InputElementType) => void
    unregisterRefs: (name: string) => void
    setValue: (name: string, value: MixType) => void
    setValues: (data: Map<string, MixType>) => void
    getValues: () => Map<string, MixType>
    fieldSpecList: () => WebDefaultInputFieldPropsBase[]
    updateInputSpec: (name: string, spec: WebInputFieldProps) => void
    version: number
    reload: () => void
}