export type FlexibleType =
  | string
  | number
  | boolean
  | object
  | Map<any, any>
  | Array<any>;

export interface MMDefaultProps {
    aux?: Record<string, FlexibleType>; // Auxiliary Params for customization
}