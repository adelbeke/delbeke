type Props = {
    title: string
    state: string
    description: string
    href?: string
}

export function Project({title, state, description, href}: Props) {
    return (
        <div className={"mb-6"}>
            {href && (
                <a href={href} target={'_blank'}>
                    <img src={"/link.svg"} alt={"link icon"} className={"h-4 w-4 mb-1"} />
                </a>
            )}
            <div className={"mb-1"}>
                <div className={"flex flex-row items-center"}>
                    <p className={"text-gray-50 font-black uppercase text-base"}>{title}</p>
                    <p className={"text-gray-500 font-light uppercase text-xs flex-nowrap"}>&nbsp;- {state}</p>
                </div>

            </div>

            <p className={"text-gray-50 text-sm"}>
                {description}
            </p>
        </div>
    )
}