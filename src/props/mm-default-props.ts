export interface MMDefaultProps {
    aux?: Record<string, any>; // Auxiliary Params for customization
}

export type FlexibleType =
  | string
  | number
  | boolean
  | object
  | Map<any, any>
  | Array<any>;