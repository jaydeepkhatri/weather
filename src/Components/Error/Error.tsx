import { RiErrorWarningLine } from "react-icons/ri"

const Error = () => {
    return (
        <>
            <div className="text-center">
                <RiErrorWarningLine className="mt-12 text-5xl m-auto" />
                <p className="mt-2">Something is not working.</p>
                <ul className="mt-6 mx-auto max-w-[360px] text-left list-disc">
                    <li>Try again</li>
                    <li>Check the city name(spelling issue)</li>
                    <li>Raise issue on <a href="https://github.com/jaydeepkhatri/weather" className="underline" target="_blank" rel="noreferrer">Github</a></li>
                    <li>Just chill bro :)</li>
                </ul>
            </div>

        </>
    )
}

export default Error