import { useState } from "react";
import EventDetails from "./EventDetails";
import EventCardList from "./EventCardList";

const Event = () => {
    const eventList = [
        {
            "@context": "/api/contexts/Event",
            "@id": "/api/events",
            "@type": "Collection",
            totalItems: 4,
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
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/1",
                    users: ["/api/users/1", "/api/users/2"],
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
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/1",
                    users: ["/api/users/2", "/api/users/3"],
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
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/1",
                    users: ["/api/users/1", "/api/users/2", "/api/users/3"],
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
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/1",
                    users: ["/api/users/1", "/api/users/2", "/api/users/3"],
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/events{?user}",
                variableRepresentation: "BasicRepresentation",
                mapping: [
                    {
                        "@type": "IriTemplateMapping",
                        variable: "user",
                        property: "user",
                    },
                ],
            },
        },
    ];
    //console.log("eventList :", eventList[0].member);
    const events = eventList[0].member;

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
                    <EventDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {events.map((event) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={event.id}
                                onClick={() => {
                                    onHandleClick(event);
                                }}
                            >
                                <EventCardList key={event.id} {...event} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Event;
