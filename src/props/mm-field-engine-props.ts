import {WebFieldSpec} from "./mm-field-spec";
import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {WebInputFieldProps} from "./mm-input-field-props";

export type InputElementType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export interface RegisteredFieldValidated {
    isValid: boolean
}

export type FieldValueType = string | boolean | number | Array<any> | File[] | File

export interface WebFieldEngineProps {
    registerFields: (fields: (spec: WebFieldSpec) => WebFieldSpec) => WebFieldSpec
    registerRefs: (name: string, element: InputElementType) => void
    setFieldErrors: (errors: Record<string, string>, notify?: boolean) => void
    unregisterRefs: (name: string) => void
    setFieldValue: (name: string, value: FieldValueType) => void
    setFieldValues: (data: Record<string, FieldValueType>) => void
    getFieldValues: () => Record<string, FieldValueType>
    validateRegisterFields: (notify?: boolean) => RegisteredFieldValidated
    fieldSpecList: () => WebDefaultInputFieldPropsBase[]
    updateInputFieldSpec: (spec: WebInputFieldProps, notify?: boolean) => void
    getSpec: <T, >(name: string) => T | undefined
    version: number
    reload: () => void
}