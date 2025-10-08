import { useState } from "react";
import SpotsFeedDetails from "./SpotsFeedDetails";
import SpotsFeedCardList from "./SpotsFeedCardList";

const SpotsFeed = () => {
    const spotsFeedList = [
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
                    createdAt: "2025-09-04T21:56:57+02:00",
                    updatedAt: "2025-09-04T21:56:57+02:00",
                    users: [
                        {
                            "@id": "/api/users/1",
                            "@type": "User",
                            id: 1,
                            lastname: "ADMIN",
                            firstname: "admin",
                            pseudo: "BOB",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/2",
                            "@type": "User",
                            id: 2,
                            lastname: "Sparrow",
                            firstname: "Jack",
                            pseudo: "jck",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/3",
                            "@type": "User",
                            id: 3,
                            lastname: "TheKid",
                            firstname: "Billy",
                            pseudo: "btk",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                    ],
                    sessions: [
                        {
                            "@id": "/api/sessions/1",
                            "@type": "Session",
                            id: 1,
                        },
                    ],
                    medias: [],
                    visibility: ["Public"],
                    visibleToGroups: [],
                    comments: [],
                    likes: [
                        {
                            "@id": "/api/likes/4",
                            "@type": "Like",
                            id: 4,
                            liked: true,
                            user: {
                                "@id": "/api/users/2",
                                "@type": "User",
                                id: 2,
                                lastname: "Sparrow",
                                firstname: "Jack",
                                pseudo: "jck",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                    ],
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        id: 1,
                        lastname: "ADMIN",
                        firstname: "admin",
                        pseudo: "BOB",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                    },
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
                    createdAt: "2025-09-04T21:56:57+02:00",
                    updatedAt: "2025-09-04T21:56:57+02:00",
                    users: [
                        {
                            "@id": "/api/users/1",
                            "@type": "User",
                            id: 1,
                            lastname: "ADMIN",
                            firstname: "admin",
                            pseudo: "BOB",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/3",
                            "@type": "User",
                            id: 3,
                            lastname: "TheKid",
                            firstname: "Billy",
                            pseudo: "btk",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                    ],
                    sessions: [],
                    medias: [
                        {
                            "@id": "/api/media/3",
                            "@type": "Media",
                            id: 3,
                            filePath:
                                "https://ibcworldtour.com/wp-content/uploads/2025/08/05.jpg",
                            type: "Image",
                            description: "from Morocco again takes the win",
                        },
                    ],
                    visibility: ["Group", "Public"],
                    visibleToGroups: ["/api/groups/2"],
                    comments: [
                        {
                            "@id": "/api/comments/4",
                            "@type": "Comment",
                            id: 4,
                            content:
                                "Cillum incididunt ullamco occaecat irure quis aliquip veniam sunt elit.",
                            createdAt: "2025-09-04T21:56:57+02:00",
                            updatedAt: "2025-09-04T21:56:57+02:00",
                            user: {
                                "@id": "/api/users/3",
                                "@type": "User",
                                id: 3,
                                lastname: "TheKid",
                                firstname: "Billy",
                                pseudo: "btk",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                        {
                            "@id": "/api/comments/5",
                            "@type": "Comment",
                            id: 5,
                            content:
                                "Anim adipisicing deserunt dolor Lorem proident officia nostrud sint.",
                            createdAt: "2025-09-04T21:56:57+02:00",
                            updatedAt: "2025-09-04T21:56:57+02:00",
                            user: {
                                "@id": "/api/users/2",
                                "@type": "User",
                                id: 2,
                                lastname: "Sparrow",
                                firstname: "Jack",
                                pseudo: "jck",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                        {
                            "@id": "/api/comments/6",
                            "@type": "Comment",
                            id: 6,
                            content:
                                "Laboris ea ea aliqua pariatur consectetur do nostrud sit officia ipsum.",
                            createdAt: "2025-09-04T21:56:57+02:00",
                            updatedAt: "2025-09-04T21:56:57+02:00",
                            user: {
                                "@id": "/api/users/4",
                                "@type": "User",
                                id: 4,
                                lastname: "Doe",
                                firstname: "John",
                                pseudo: "jiji",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                    ],
                    likes: [],
                    user: {
                        "@id": "/api/users/2",
                        "@type": "User",
                        id: 2,
                        lastname: "Sparrow",
                        firstname: "Jack",
                        pseudo: "jck",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                    },
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
                    createdAt: "2025-09-04T21:56:57+02:00",
                    updatedAt: "2025-09-04T21:56:57+02:00",
                    users: [
                        {
                            "@id": "/api/users/1",
                            "@type": "User",
                            id: 1,
                            lastname: "ADMIN",
                            firstname: "admin",
                            pseudo: "BOB",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/2",
                            "@type": "User",
                            id: 2,
                            lastname: "Sparrow",
                            firstname: "Jack",
                            pseudo: "jck",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                    ],
                    sessions: [],
                    medias: [],
                    visibility: ["Public"],
                    visibleToGroups: [],
                    comments: [
                        {
                            "@id": "/api/comments/7",
                            "@type": "Comment",
                            id: 7,
                            content:
                                "Velit eiusmod ad non ea cupidatat. Enim ullamco cupidatat excepteur deserunt laboris consectetur dolor dolore dolore. Fugiat in reprehenderit nulla voluptate do nulla culpa nisi cillum. Id amet Lorem ipsum anim nostrud ex sit veniam sint. Do deserunt esse voluptate laborum sint non eu Lorem occaecat aute elit amet eiusmod. Ea ea veniam ex officia nisi laborum nisi sit tempor eiusmod enim ullamco do.",
                            createdAt: "2025-09-04T21:56:57+02:00",
                            updatedAt: "2025-09-04T21:56:57+02:00",
                            user: {
                                "@id": "/api/users/3",
                                "@type": "User",
                                id: 3,
                                lastname: "TheKid",
                                firstname: "Billy",
                                pseudo: "btk",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                    ],
                    likes: [],
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        id: 1,
                        lastname: "ADMIN",
                        firstname: "admin",
                        pseudo: "BOB",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                    },
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
                    createdAt: "2025-09-04T21:56:57+02:00",
                    updatedAt: "2025-09-04T21:56:57+02:00",
                    users: [
                        {
                            "@id": "/api/users/1",
                            "@type": "User",
                            id: 1,
                            lastname: "ADMIN",
                            firstname: "admin",
                            pseudo: "BOB",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/2",
                            "@type": "User",
                            id: 2,
                            lastname: "Sparrow",
                            firstname: "Jack",
                            pseudo: "jck",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/3",
                            "@type": "User",
                            id: 3,
                            lastname: "TheKid",
                            firstname: "Billy",
                            pseudo: "btk",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/4",
                            "@type": "User",
                            id: 4,
                            lastname: "Doe",
                            firstname: "John",
                            pseudo: "jiji",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                    ],
                    sessions: [],
                    medias: [],
                    visibility: ["Public"],
                    visibleToGroups: [],
                    comments: [
                        {
                            "@id": "/api/comments/8",
                            "@type": "Comment",
                            id: 8,
                            content:
                                "Nisi anim tempor ea eu irure voluptate voluptate excepteur.",
                            createdAt: "2025-09-04T21:56:57+02:00",
                            updatedAt: "2025-09-04T21:56:57+02:00",
                            user: {
                                "@id": "/api/users/1",
                                "@type": "User",
                                id: 1,
                                lastname: "ADMIN",
                                firstname: "admin",
                                pseudo: "BOB",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                    ],
                    likes: [
                        {
                            "@id": "/api/likes/5",
                            "@type": "Like",
                            id: 5,
                            liked: true,
                            user: {
                                "@id": "/api/users/4",
                                "@type": "User",
                                id: 4,
                                lastname: "Doe",
                                firstname: "John",
                                pseudo: "jiji",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                    ],
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        id: 1,
                        lastname: "ADMIN",
                        firstname: "admin",
                        pseudo: "BOB",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                    },
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/spots{?user,user[],user}",
                variableRepresentation: "BasicRepresentation",
                mapping: [
                    {
                        "@type": "IriTemplateMapping",
                        variable: "user",
                        property: "user",
                        required: false,
                    },
                    {
                        "@type": "IriTemplateMapping",
                        variable: "user[]",
                        property: "user",
                        required: false,
                    },
                    {
                        "@type": "IriTemplateMapping",
                        variable: "user",
                        property: "user",
                    },
                ],
            },
        },
    ];
    //console.log("spotsFeedList :", spotsFeedList[0].member);
    const spotsFeed = spotsFeedList[0].member;

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
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        Spot
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/spotNew"
                    >
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <SpotsFeedDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {spotsFeed.map((spot) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={spot.id}
                                onClick={() => {
                                    onHandleClick(spot);
                                }}
                            >
                                <SpotsFeedCardList key={spot.id} {...spot} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default SpotsFeed;
