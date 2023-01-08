import { RiMapPinLine } from "react-icons/ri";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const WeatherInfo = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center py-24 leading-normal">
            <p className="text-9xl">24°</p>
            <p className="mt-2 text-cus-gray">☁️ Cloudy</p>

            <div className="flex mt-2">
                <div className="flex items-center text-cus-gray">
                    <RiMapPinLine />
                    <span className="ml-2">Mumbai</span>
                </div>

                <div className="flex items-center text-cus-gray ml-6">
                    <span>16° / 26°</span>
                </div>
            </div>
        </div>
        
        <AdditionalInfo />
        </>
    )
}

export default WeatherInfo;