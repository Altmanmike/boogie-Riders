import { useState } from "react";
import SpotDetails from "./SpotDetails";
import SpotCardList from "./SpotCardList";

const Spot = () => {
    const spotList = [
        {
            "@context": "/api/contexts/Spot",
            "@id": "/api/spots",
            "@type": "Collection",
            totalItems: 4,
            member: [
                {
                    "@id": "/api/spots/1",
                    "@type": "Spot",
                    id: 1,
                    name: "Sintra",
                    cover: "https://ibcworldtour.com/wp-content/uploads/2025/08/IMG_7228-1920x1080.jpg",
                    lat: 38.8141377,
                    lon: -9.4770121,
                    location: "Avenida Alfredo Coelho, Colares, Portugal",
                    description: "Europe’s most iconic beaches.",
                    waveType: "Beach break",
                    bestConditions:
                        "The spot works at all tides. The ideal wind is offshore, coming from the east. It picks up northwest swells well. It's a very regular and consistent spot. For beginners, summer is ideal with smaller waves. More experienced surfers will prefer fall and win",
                    difficultyLevel: 4,
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    users: ["/api/users/1"],
                    sessions: ["/api/sessions/1"],
                    medias: [],
                },
                {
                    "@id": "/api/spots/2",
                    "@type": "Spot",
                    id: 2,
                    name: "Mehdya",
                    cover: "https://ibcworldtour.com/wp-content/uploads/2025/08/21.jpg",
                    lat: 34.259499338972,
                    lon: -6.6812514111815,
                    location: "Mehdya Beach, Kenitra, Morocco",
                    description:
                        "Partnership with the Royal Moroccan Surfing Federation (FRMS).",
                    waveType: "Beach break",
                    bestConditions:
                        "The spot catches northwest swells well. The ideal wind is offshore, coming from the east, which tends to dig the waves. The spot works at all tides.",
                    difficultyLevel: 4,
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    users: ["/api/users/2"],
                    sessions: [],
                    medias: ["/api/media/2"],
                },
                {
                    "@id": "/api/spots/3",
                    "@type": "Spot",
                    id: 3,
                    name: "Iquique",
                    cover: "https://ibcworldtour.com/wp-content/uploads/2024/05/Mikelle-Arriagada-Chile-2.jpg",
                    lat: -20.217092139499,
                    lon: -70.156223833812,
                    location:
                        "Punta Dos, Bellavista Beach in El Morro, Iquique, Chile",
                    description: "Chile's famous spot.",
                    waveType: "Shallow reef",
                    bestConditions:
                        "The spot operates with northwest, south, southwest, and west swells. There is no universally ideal tide, but most spots in the area operate well at low tide. The ideal wind is offshore, coming from the east. This is a spot that can be surfed year-round, b",
                    difficultyLevel: 4,
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    users: ["/api/users/3"],
                    sessions: [],
                    medias: [],
                },
                {
                    "@id": "/api/spots/4",
                    "@type": "Spot",
                    id: 4,
                    name: "El Frontón",
                    cover: "https://ibcworldtour.com/wp-content/uploads/2024/10/Armide-FK-2023.jpg",
                    lat: 28.158315034015,
                    lon: -15.665381432594,
                    location: "Playa boca Barranco, Gran Canaria, Spain",
                    description: "Spain's famous spot in Gran Canaria islands",
                    waveType: "Shallow reef",
                    bestConditions:
                        "This is a reef break (a wave that breaks on a reef). It is known for being very powerful, explosive, and tubular. The spot works best with a house coming from the NW, N, or NE. Light winds from the S, SW, or W are ideal, as they create offshore conditions",
                    difficultyLevel: 4,
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    users: ["/api/users/1"],
                    sessions: [],
                    medias: [],
                },
            ],
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