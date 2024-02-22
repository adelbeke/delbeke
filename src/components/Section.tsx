import {PropsWithChildren} from "react";

type Props = PropsWithChildren & {
    title: string
}

export function Section({title, children}: Props) {
    return (
        <section className={"mb-6"}>
            <h2 className={"text-4xl font-black text-gray-800 mb-3 uppercase"}>{title}</h2>
            {children}
        </section>
    )
}