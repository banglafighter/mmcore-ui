import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {MixType, UIComponentProps, UINode} from "mmcore";

export interface WebSelectFieldPropsBase extends WebDefaultInputFieldPropsBase {
    options: Record<string, MixType>[]
    labelKey: string
    valueKey: string
    optionKey?: string
    multiple?: boolean
    placeholder?: string
    showClear?: boolean
    isTagMode?: boolean

    customOption?: (item: any, labelKey: string, valueKey: string, options: Record<string, MixType>[]) => UINode
    emptyOptionContent?: UINode
    createNewItem?: (searchText: string, setNewOptions: (newOptions: Record<string, MixType>[]) => void) => void
    loadNewItem?: (updateLoader: (isLoading: boolean) => void, setNewOptions: (newOptions: Record<string, MixType>[]) => void) => void
}

export type WebSelectFieldProps = WebSelectFieldPropsBase & UIComponentProps<"select">