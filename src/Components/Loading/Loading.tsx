import { TbSearch } from "react-icons/tb";

const Loading = () => {
    return (
        <>
            <div className="text-center my-16">
                <TbSearch className="text-4xl mx-auto mb-3 text-gray-600 dark:text-dark-500 duration-100" />
                <p className="text-gray-600 dark:text-dark-500 duration-100">Search City Name</p>
            </div>

        </>
    )
}

export default Loading;