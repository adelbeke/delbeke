import dict from '../dict.ts'

export function Header() {
    return (
        <header className={"flex flex-col md:flex-row items-center justify-between"}>
            <div className={"flex flex-col justify-center items-center md:flex-row md:justify-between"}>
                <div className={"h-32 w-32 relative flex justify-center items-center"}>
                    <div className={"animate-ping h-32 w-32 absolute left-0 top-0"}>
                        <img src={'/react.svg'} alt={"react-svg"} />
                    </div>

                    <div className={"h-24 w-24 rounded-full bg-[url('/me.jpg')] bg-cover absolute"}></div>
                </div>

                <div className={"ml-0 md:ml-4 z-10"}>
                <h1 className={"font-black text-gray-50 text-4xl mt-1"}>
                        {dict.name}
                    </h1>
                    <h3 className={"text-gray-300 text-xl font-light"}>
                        {dict.job}
                    </h3>
                </div>
            </div>

            <div className={"flex flex-row items-center mt-4 md:mt-0"}>
                <a className={"mx-4 hover:scale-110 transition"} href={"https://www.linkedin.com/in/arthurdelbeke/"} target={"_blank"}>
                    <img src={"/linkedin.svg"} alt={"linkedin icon"}/>
                </a>
                <a className={"mx-4 md:mx-0 hover:scale-110 transition"} href={"https://github.com/adscud"} target={"_blank"}>
                    <img src={"/github.svg"} alt={"github icon"}/>
                </a>
            </div>
        </header>
    )
}