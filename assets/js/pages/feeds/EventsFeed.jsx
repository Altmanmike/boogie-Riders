import { useState } from "react";
import EventsFeedDetails from "./EventsFeedDetails";
import EventsFeedCardList from "./EventsFeedCardList";

const EventsFeed = () => {
    const eventsFeedList = [
        {
            "@context": "/api/contexts/Event",
            "@id": "/api/events",
            "@type": "Collection",
            totalItems: 5,
            member: [
                {
                    "@id": "/api/events/1",
                    "@type": "Event",
                    id: 1,
                    name: "Sintra Bodyboard Pro Fest 2025",
                    cover: "https://ibcworldtour.com/wp-content/uploads/2025/08/COVER.jpg",
                    description:
                        "This year, the festival will elevate the competition to a new level with the Men Rising Series and Women Rising Series categories. The world’s top riders will compete for substantial prize money: a total of $30,000 USD for the men’s category and $15,000 USD for the women’s. Prepare for a spectacle of impossible spins, perfect tubes, and gravity-defying maneuvers on one of Europe’s most iconic beaches.",
                    dateStart: "2025-09-03T09:00:00+02:00",
                    dateEnd: "2025-09-07T18:00:00+02:00",
                    lat: 38.8141377,
                    lon: -9.4770121,
                    location: "Avenida Alfredo Coelho, Colares, Portugal",
                    url: "https://ibcworldtour.com/events/sintra-bodyboard-pro-fest-2025/",
                    rewards: 45000,
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
                    visibility: ["Public"],
                    visibleToGroups: [],
                    comments: [
                        {
                            "@id": "/api/comments/9",
                            "@type": "Comment",
                            id: 9,
                            content:
                                "In qui aliqua nisi fugiat ad Lorem. Sunt reprehenderit nulla cillum amet aliqua. Nulla sunt commodo ut amet consequat aliquip eu ea ex. Sit nostrud ullamco sit id veniam qui laborum nisi. Ex proident reprehenderit dolor anim eiusmod labore. Esse eiusmod velit Lorem proident dolore. Quis consectetur in ad consectetur adipisicing esse culpa est consectetur enim proident ex pariatur.",
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
                            "@id": "/api/likes/6",
                            "@type": "Like",
                            id: 6,
                            liked: true,
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
                    medias: [],
                },
                {
                    "@id": "/api/events/2",
                    "@type": "Event",
                    id: 2,
                    name: "EVERYDAY MEHDYA Rising Series 2025 in Morocco",
                    cover: "https://ibcworldtour.com/wp-content/uploads/2025/06/Affiche-horizontale-.jpg",
                    description:
                        "We are thrilled to announce that Everyday Mehdya, in proud partnership with the Royal Moroccan Surfing Federation (FRMS), will be hosting the 2025 IBC Bodyboarding World Tour Junior Men Rising Series.",
                    dateStart: "2025-08-11T09:00:00+02:00",
                    dateEnd: "2025-08-17T17:00:00+02:00",
                    lat: 34.259499338972,
                    lon: -6.6812514111815,
                    location: "Mehdya Beach, Kenitra, Morocco",
                    url: "https://ibcworldtour.com/events/everyday-mehdya-rising-series-2025-in-morocco/",
                    rewards: 2500,
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
                    users: [
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
                    visibility: ["Group", "Public"],
                    visibleToGroups: ["/api/groups/2"],
                    comments: [
                        {
                            "@id": "/api/comments/10",
                            "@type": "Comment",
                            id: 10,
                            content:
                                "Aliqua aliqua deserunt voluptate eu veniam est minim non sint voluptate duis occaecat do aliqua.",
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
                    ],
                    likes: [],
                    medias: [
                        {
                            "@id": "/api/media/6",
                            "@type": "Media",
                            id: 6,
                            filePath: "https://youtu.be/2l92OP0Zgxg",
                            type: "Video",
                            description: "IBC MEDHYA 2025 DAY 2 trailer",
                        },
                    ],
                },
                {
                    "@id": "/api/events/3",
                    "@type": "Event",
                    id: 3,
                    name: "Iquique Bodyboard Pro 2025 – Men & Women Prime Series Spots",
                    cover: "https://ibcworldtour.com/wp-content/uploads/2025/06/afiche-horizontal-1920x1080.jpg",
                    description:
                        "Register page for this event. The world’s top riders will compete for substantial prize money: a total of $35,000 USD for the men’s category and $25,000 USD for the women’s",
                    dateStart: "2025-08-11T09:00:00+02:00",
                    dateEnd: "2025-08-17T17:00:00+02:00",
                    lat: -20.217092139499,
                    lon: -70.156223833812,
                    location:
                        "Punta Dos, Bellavista Beach in El Morro, Iquique, Chile",
                    url: "https://ibcworldtour.com/events/2025/iquique-bodyboard-pro-2025/2025/register-now-ijunior-men-quique-bodyboard-pro-2025-rising-series-spots-open/",
                    rewards: 60000,
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
                    visibility: ["Public"],
                    visibleToGroups: [],
                    comments: [
                        {
                            "@id": "/api/comments/11",
                            "@type": "Comment",
                            id: 11,
                            content:
                                "Ullamco officia qui exercitation dolor enim nisi enim consectetur labore veniam est enim ad.",
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
                    medias: [],
                },
                {
                    "@id": "/api/events/4",
                    "@type": "Event",
                    id: 4,
                    name: "Gran Canaria Frontón King 2025 – Men & Women Prime Series Spots",
                    cover: "https://ibcworldtour.com/wp-content/uploads/2024/08/REGISTRATIONS-OPEN-1600x1000-IBC.jpg",
                    description:
                        "Register page for this event. The world’s top riders will compete for substantial prize money: a total of $35,000 USD for the men’s category and $25,000 USD for the women’s",
                    dateStart: "2025-10-11T09:00:00+02:00",
                    dateEnd: "2025-10-25T17:00:00+02:00",
                    lat: 28.158315034015,
                    lon: -15.665381432594,
                    location: "Playa Boca Barranco, Gran Canaria, Spain",
                    url: "https://ibcworldtour.com/",
                    rewards: 60000,
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
                    visibility: ["Public"],
                    visibleToGroups: [],
                    comments: [
                        {
                            "@id": "/api/comments/12",
                            "@type": "Comment",
                            id: 12,
                            content:
                                "Cupidatat enim qui laboris incididunt. Velit nostrud consectetur minim reprehenderit ipsum amet amet pariatur dolore deserunt ad. Deserunt id aliqua ipsum magna aliqua aliqua quis nostrud. Lorem proident commodo nostrud ut.",
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
                    likes: [
                        {
                            "@id": "/api/likes/7",
                            "@type": "Like",
                            id: 7,
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
                    medias: [],
                },
                {
                    "@id": "/api/events/5",
                    "@type": "Event",
                    id: 5,
                    name: "Friends competitive session in Lacanau",
                    cover: "",
                    description:
                        "Register page for this event. 1000 € to share",
                    dateStart: "2025-10-11T09:00:00+02:00",
                    dateEnd: "2025-10-25T17:00:00+02:00",
                    lat: 45.002464902756,
                    lon: -1.2028219290825,
                    location: "5 Boulevard de la Plage, 33680 Lacanau, France",
                    url: "https://www.lacanausurfcamp.fr/",
                    rewards: 1000,
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
                    visibility: ["Group", "Public"],
                    visibleToGroups: ["/api/groups/3"],
                    comments: [
                        {
                            "@id": "/api/comments/13",
                            "@type": "Comment",
                            id: 13,
                            content:
                                "Tempor voluptate mollit cupidatat esse pariatur cupidatat.",
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
                    medias: [
                        {
                            "@id": "/api/media/7",
                            "@type": "Media",
                            id: 7,
                            filePath: "https://youtu.be/fx64Rz7jlvw",
                            type: "Video",
                            description:
                                "Wave conditions the 20 august 2025 at Lacanau, France",
                        },
                    ],
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/events{?user,user[],user}",
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
    //console.log("eventsFeedList :", eventsFeedList[0].member);
    const eventsFeed = eventsFeedList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (event) => {
        setSelectedItem(event);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-4xl font-bold text-center my-5">
                        Event
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/eventNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <EventsFeedDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {eventsFeed.map((event) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={event.id}
                                onClick={() => {
                                    onHandleClick(event);
                                }}
                            >
                                <EventsFeedCardList key={event.id} {...event} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default EventsFeed;
