type Props = {
    time?: string
    title: string
    description: string
    href?: string
}

export function Event({time, title, description, href}: Props) {
    return (
        <div className={"mb-6"}>
            {href && (
                <a href={href} target={'_blank'}>
                    <img src={"/link.svg"} alt={"link icon"} className={"h-4 w-4"} />
                </a>
            )}
            {time && <p className={"text-gray-500 font-black"}>{time}</p>}
            <p className={"text-gray-50 font-black"}>{title}</p>
            <p className={"text-gray-50 text-sm"}>
                {description}
            </p>
        </div>
    )

}