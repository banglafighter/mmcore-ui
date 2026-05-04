import {MixType} from "mmcore";
import {WebFieldSpec} from "./mm-field-spec";
import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {WebInputFieldProps} from "./mm-input-field-props";

export type InputElementType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export interface RegisteredFieldValidated {
    isValid: boolean
}


export interface WebFieldEngineProps {
    registerFields: (fields: (spec: WebFieldSpec) => WebFieldSpec) => WebFieldSpec
    registerRefs: (name: string, element: InputElementType) => void
    unregisterRefs: (name: string) => void
    setFieldValue: (name: string, value: MixType) => void
    setFieldValues: (data: Record<string, MixType>) => void
    getFieldValues: () => Record<string, MixType>
    validateRegisterFields: (notify?: boolean) => RegisteredFieldValidated
    fieldSpecList: () => WebDefaultInputFieldPropsBase[]
    updateInputFieldSpec: (spec: WebInputFieldProps, notify?: boolean) => void
    version: number
    reload: () => void
}