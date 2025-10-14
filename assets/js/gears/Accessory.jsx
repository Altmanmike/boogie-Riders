import { useState, useEffect } from "react";
import AccessoryDetails from "./AccessoryDetails";
import AccessoryCardList from "./AccessoryCardList";
import instance from "../axiosConfig";

const Accessory = ({ onlineUser }) => {
    
    const [selectedItem, setSelectedItem] = useState(null);
    const [accessoriesUserList, setAccessoriesUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.get(accessoriesUserEndPoint);
            const accessoriesData = response.data.member;
            setAccessoriesUserList(accessoriesData);
        } catch (error) {
            console.error(error);
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const userId = parseInt(onlineUser.substring(1, 2));

    const accessoriesUserEndPoint = "/accessories?page=1&user="+userId;

    useEffect(() => {
        fetchData(accessoriesUserEndPoint);
    }, []);

    //console.log("accessoriesUserList :", accessoriesUserList);

    const accessories = accessoriesUserList;

    const onHandleClick = (accessory) => {
        setSelectedItem(accessory);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    const skeletons = [1, 2, 3].map((i) => (
        <div key={i} className="flex items-center w-80 flex-col gap-10">
            <div className="skeleton h-64 w-48"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-28"></div>           
        </div>
    )); 

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        Accessory
                    </h1>
                    <a className="btn btn-xs sm:btn-sm btn-neutral" href="/accessoryNew">
                        Add new
                    </a>
                </div>
                {loading && (
                    <div className="flex justify-center items-center gap-5 mt-10 my-5">
                        {skeletons}
                    </div>
                )}
                {error && (
                    <div
                        role="alert"
                        className="alert alert-error alert-soft mx-auto w-96 mt-10 my-5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{error}</span>
                    </div>
                )}
                {selectedItem ? (
                    <AccessoryDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {accessories.map((accessory) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={accessory.id}
                                onClick={() => {
                                    onHandleClick(accessory);
                                }}
                            >
                                <AccessoryCardList
                                    key={accessory.id}
                                    {...accessory}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Accessory;