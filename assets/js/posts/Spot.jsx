import { useState } from "react";
import SpotDetails from "./SpotDetails";
import SpotCardList from "./SpotCardList";

const Spot = () => {
    const spotList = [
        {
            "@context": "/api/contexts/Spot",
            "@id": "/api/spots",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/spots/1",
                    "@type": "Spot",
                    id: 1,
                    name: "Sintra",
                    lat: 38.8141377,
                    lon: -9.4770121,
                    location: "Avenida Alfredo Coelho, Colares, Portugal",
                    description: "Europe’s most iconic beaches.",
                    waveType: "ghjghj",
                    bestConditions: "ghjghjrtyu",
                    difficultyLevel: 4,
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    users: ["/api/users/1"],
                    sessions: ["/api/sessions/1"],
                    medias: ["/api/media/2"],
                },
                {
                    "@id": "/api/spots/2",
                    "@type": "Spot",
                    id: 2,
                    name: "Mehdya",
                    lat: 34.259499338972,
                    lon: -6.6812514111815,
                    location: "Mehdya Beach, Kenitra, Morocco",
                    description:
                        "Partnership with the Royal Moroccan Surfing Federation (FRMS).",
                    waveType: "ghjghjgj",
                    bestConditions: "tyutyu",
                    difficultyLevel: 4,
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    users: ["/api/users/2"],
                    sessions: [],
                    medias: [],
                },
                {
                    "@id": "/api/spots/3",
                    "@type": "Spot",
                    id: 3,
                    name: "Iquique",
                    lat: -20.217092139499,
                    lon: -70.156223833812,
                    location:
                        "Punta Dos, Bellavista Beach in El Morro, Iquique, Chile",
                    description: "Chile's famous spot.",
                    waveType: "hjghjghj",
                    bestConditions: "jghjghjgtyutyu",
                    difficultyLevel: 4,
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    users: ["/api/users/3"],
                    sessions: [],
                    medias: [],
                },
            ],
            view: {
                "@id": "/api/spots?user=1",
                "@type": "PartialCollectionView",
            },
            search: {
                "@type": "IriTemplate",
                template: "/api/spots{?}",
                variableRepresentation: "BasicRepresentation",
                mapping: [],
            },
        },
    ];
    //console.log("spotList :", spotList[0].member);
    const spots = spotList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (spot) => {
        setSelectedItem(spot);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-4xl font-bold text-center my-5">
                        Spot
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/spotNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <SpotDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {spots.map((spot) => (
                            <div
                                className=""
                                key={spot.id}
                                onClick={() => {
                                    onHandleClick(spot);
                                }}
                            >
                                <SpotCardList key={spot.id} {...spot} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Spot;