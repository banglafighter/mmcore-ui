import {MMDefaultProps} from "./../common/mm-default-props";
import {UIComponentProps} from "mmcore";

export type AvatarSize = "default" | "small" | "medium" | "large" | "exLarge"

export interface DefaultImageProps extends MMDefaultProps {
    src: string
    height?: string
    width?: string
    ratio?: string
    loading?: "lazy" | "eager"
    decoding?: "async" | "sync" | "auto"
    shape?: "circle" | "square" | "rounded"
    avatar?: AvatarSize
    thumb?: "card" | "blog" | "gallery" | "product"

    fallback?: string
    fallbackSrc?: string
    isDirectLoading?: boolean
}

export interface WebImagePropsBase extends DefaultImageProps {
    alt: string
}

export type WebImageProps = WebImagePropsBase & UIComponentProps<"span">