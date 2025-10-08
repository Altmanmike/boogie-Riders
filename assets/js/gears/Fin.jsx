import { useState } from "react";
import FinDetails from "./FinDetails";
import FinCardList from "./FinCardList";

const Fin = () => {
    const finList = [
        {
            "@context": "/api/contexts/Fin",
            "@id": "/api/fins",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/fins/1",
                    "@type": "Fin",
                    id: 1,
                    brand: "GYROLL",
                    size: "M",
                    description:
                        "Maximize your propulsion with Gyroll fins. Made in Malaysia from 100% Malaysian rubber (yes, that's important... no fuss), these fins feature a soft pocket and a stiffer blade for the perfect balance of comfort and power. A true blast from the past!",
                    colors: ["Yellow", "Blue"],
                    price: 59,
                    photo: "https://www.ogm-bodyboard-shop.com/5310-large_default/palmes-gyroll-.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/2",
                },
                {
                    "@id": "/api/fins/2",
                    "@type": "Fin",
                    id: 2,
                    brand: "MS VIPER",
                    size: "ML",
                    description:
                        "This model is more flexible than the MS Viper Classic for optimal comfort. Fins are 100% natural rubber, so they float!\r\n            Shorter and wider for optimal acceleration.\r\n            Drainage holes allow sand and stones to escape.",
                    colors: ["Red", "Blue"],
                    price: 75.5,
                    photo: "https://www.ogm-bodyboard-shop.com/4690-large_default/palmes-ms-viper-blue-red.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/1",
                },
                {
                    "@id": "/api/fins/3",
                    "@type": "Fin",
                    id: 3,
                    brand: "POD 2",
                    size: "M",
                    description:
                        "These fins are comfortable and more powerful than the POD 1 thanks to their more pronounced edges. Sand and stone evacuation is very functional. Short and aggressive, they will delight drop knee riders as well as prone riders!",
                    colors: ["White", "Black"],
                    price: 75,
                    photo: "https://www.ogm-bodyboard-shop.com/4914-large_default/palmes-pod-2.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/3",
                },
            ],
        },
    ];
    //console.log("finList :", finList[0].member);
    const fins = finList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (fin) => {
        setSelectedItem(fin);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        Fin
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/finNew"
                    >
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <FinDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {fins.map((fin) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={fin.id}
                                onClick={() => {
                                    onHandleClick(fin);
                                }}
                            >
                                <FinCardList key={fin.id} {...fin} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Fin;
