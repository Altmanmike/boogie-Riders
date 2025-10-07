import { useState } from "react";
import LeashDetails from "./LeashDetails";
import LeashCardList from "./LeashCardList";

const Leash = () => {
    const leashList = [
        {
            "@context": "/api/contexts/Leash",
            "@id": "/api/leashes",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/leashes/1",
                    "@type": "Leash",
                    id: 1,
                    brand: "FOUND",
                    type: "Biceps",
                    size: "L",
                    description: "LEASH Biceps FOUND KD.",
                    colors: ["Black"],
                    price: 40,
                    photo: "https://www.ogm-bodyboard-shop.com/5274-large_default/leash-biceps-found-kd-.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/1",
                },
                {
                    "@id": "/api/leashes/2",
                    "@type": "Leash",
                    id: 2,
                    brand: "OGM",
                    type: "Biceps",
                    size: "L",
                    description: "Leash Biceps OGM Premium.",
                    colors: ["Green fluo"],
                    price: 45,
                    photo: "https://www.ogm-bodyboard-shop.com/5013-large_default/leash-biceps-ogm-premium.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/2",
                },
                {
                    "@id": "/api/leashes/3",
                    "@type": "Leash",
                    id: 3,
                    brand: "NMD",
                    type: "Biceps",
                    size: "L",
                    description: "Leash Biceps NMD.",
                    colors: ["White", "Black"],
                    price: 39,
                    photo: "https://www.ogm-bodyboard-shop.com/3975-large_default/leash-nmd-biceps-noir-blanc.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/3",
                },
            ],
        },
    ];
    //console.log("leashList :", leashList[0].member);
    const leashes = leashList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (leash) => {
        setSelectedItem(leash);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-4xl font-bold text-center my-5">
                        Leash
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/leashNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <LeashDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {leashes.map((leash) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={leash.id}
                                onClick={() => {
                                    onHandleClick(leash);
                                }}
                            >
                                <LeashCardList key={leash.id} {...leash} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Leash;
