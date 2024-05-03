import { createElement, HTMLAttributes } from "react"
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {
    children: string,
    tag: string,
} & HTMLAttributes<HTMLElement>


export const SanitizeHTML = ({tag, children, ...rest}: SanitizeHTMLProps) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: ['p', 'i', 'b', 'em', 'strong']
    })

    console.log(children)
    console.log(sanitizedHTML)

    return createElement(
        tag,
        {...rest},
        sanitizedHTML
    )
}