import {AllInputType, InputPropsBase, WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {FieldGroupType, WebFieldGroupProps} from "./mm-field-group-props";
import {WebSelectFieldProps} from "./mm-select-field-props";
import {FieldValueType} from "./mm-field-engine-props";
import {WebFileFieldProps} from "./mm-file-field-props";
import {WebDateTimeFieldProps} from "./mm-date-time-field-props";
import {WebCheckFieldProps} from "./mm-check-field-props";
import {WebInputNumberFieldProps} from "./mm-input-field-props";
import {MixType, UINode} from "mmcore";
import {WebGridItemPropsBase} from "./mm-grid-props";

export interface WebFieldBreak extends InputPropsBase, WebGridItemPropsBase {
    specType?: AllInputType | "break"
    groupType?: FieldGroupType
    content: UINode
}

export type WebFieldAllTypeProps =
    | WebDefaultInputFieldPropsBase
    | WebFieldGroupProps
    | WebSelectFieldProps
    | WebInputNumberFieldProps
    | WebFileFieldProps
    | WebDateTimeFieldProps
    | WebCheckFieldProps
    | WebFieldBreak

export class WebFieldSpec {
    private allSpec: Map<string, WebFieldAllTypeProps> = new Map<string, WebDefaultInputFieldPropsBase>()
    private selectNameAndOptionKey: Map<string, string> = new Map<string, string>()

    public getSpecList(): WebFieldAllTypeProps [] {
        return Array.from(this.allSpec.values())
    }

    public text(spec: WebFieldGroupProps): WebFieldSpec {
        spec.specType = "text"
        spec.groupType = "text"
        spec.type = "text"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public email(spec: WebFieldGroupProps): WebFieldSpec {
        spec.specType = "text"
        spec.groupType = "text"
        spec.type = "email"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public password(spec: WebFieldGroupProps): WebFieldSpec {
        spec.specType = "password"
        spec.groupType = "text"
        spec.type = "password"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public textarea(spec: WebFieldGroupProps): WebFieldSpec {
        spec.specType = "textarea"
        spec.groupType = "textarea"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public select(spec: WebSelectFieldProps): WebFieldSpec {
        spec.specType = "select"
        if (spec.optionKey) {
            this.selectNameAndOptionKey.set(spec.name, spec.optionKey)
        }
        this.allSpec.set(spec.name, spec)
        return this
    }

    public number(spec: WebInputNumberFieldProps): WebFieldSpec {
        spec.specType = "text"
        spec.type = "number"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public file(spec: WebFileFieldProps): WebFieldSpec {
        spec.specType = "file"
        spec.type = "file"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public date(spec: WebDateTimeFieldProps): WebFieldSpec {
        spec.specType = "date"
        spec.type = "text"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public checkbox(spec: WebCheckFieldProps): WebFieldSpec {
        spec.specType = "checkbox"
        spec.type = "checkbox"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public switch(spec: WebCheckFieldProps): WebFieldSpec {
        spec.specType = "checkbox"
        spec.type = "switch"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public fieldBreak(spec: WebFieldBreak): WebFieldSpec {
        spec.specType = "break"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public updateSpec(spec: WebDefaultInputFieldPropsBase) {
        if (spec && this.allSpec.has(spec.name)) {
            const oldSpec = this.allSpec.get(spec.name)!
            const newSpec = {...oldSpec, ...spec}
            this.allSpec.set(spec.name, newSpec)
        }
    }

    public updateDefaultValue(name: string, value: FieldValueType) {
        const spec = this.allSpec.get(name)
        if (!spec) {
            return
        } else {
            this.allSpec.set(name, {...spec, defaultValue: value})
        }
    }

    public getSpec<T>(name: string): T | undefined {
        return this.allSpec.get(name) as T | undefined
    }

    public setSelectOptions(name: string, options: Record<string, MixType>[]) {
        const spec: WebSelectFieldProps | undefined = this.getSpec<WebSelectFieldProps>(name)
        if (spec && "options" in spec) {
            spec.options = options
            this.updateSpec(spec)
        }
    }

    public setSelectOptionsByOptionKey(keyValues: Record<string, Record<string, MixType>[]>) {
        if (!keyValues) {
            return
        }
        for (const [selectName, optionKey] of this.selectNameAndOptionKey.entries()) {
            if (Object.hasOwn(keyValues, optionKey)) {
                this.setSelectOptions(selectName, keyValues[optionKey])
            }
        }
    }

}