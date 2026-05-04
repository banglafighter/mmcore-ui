import {WebDefaultInputFieldPropsBase} from "./mm-input-common-props";
import {WebInputFieldProps} from "./mm-input-field-props";


export class WebFieldSpec {
    private allSpec: Map<string, WebDefaultInputFieldPropsBase> = new Map<string, WebDefaultInputFieldPropsBase>()

    public getSpecList(): WebDefaultInputFieldPropsBase [] {
        return Array.from(this.allSpec.values())
    }

    public text(spec: WebInputFieldProps): WebFieldSpec {
        spec.specType = "text"
        this.allSpec.set(spec.name, spec)
        return this
    }
}