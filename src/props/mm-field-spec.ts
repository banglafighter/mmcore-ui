import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {WebInputFieldProps} from "./mm-input-field-props";


export class WebFieldSpec {
    private allSpec: Map<string, WebDefaultInputFieldPropsBase> = new Map<string, WebDefaultInputFieldPropsBase>()

    public getSpecList(): WebDefaultInputFieldPropsBase [] {
        return Array.from(this.allSpec.values())
    }

    public text(spec: WebInputFieldProps): WebFieldSpec {
        spec.specType = "text"
        spec.type = "text"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public textarea(spec: WebInputFieldProps): WebFieldSpec {
        spec.specType = "textarea"
        spec.type = "textarea"
        this.allSpec.set(spec.name, spec)
        return this
    }

    public updateSpec(spec: WebDefaultInputFieldPropsBase) {
        if (this.allSpec.has(spec.name)) {
            const oldSpec = this.allSpec.get(spec.name)!
            spec.specType = oldSpec.specType
            const newSpec = {...oldSpec, ...spec}
            this.allSpec.set(spec.name, newSpec)
        }
    }
}