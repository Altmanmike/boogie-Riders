import { useState } from "react";
import SessionDetails from "./SessionDetails";
import SessionCardList from "./SessionCardList";

const Session = () => {
    const sessionList = [
        {
            "@context": "/api/contexts/Session",
            "@id": "/api/sessions",
            "@type": "Collection",
            totalItems: 1,
            member: [
                {
                    "@id": "/api/sessions/1",
                    "@type": "Session",
                    id: 1,
                    cover: "https://ibcworldtour.com/wp-content/uploads/2025/08/02.jpg",
                    date: "2025-09-01T07:00:00+02:00",
                    description:
                        "Photo of the session during the event in Marocco",
                    duration: 4,
                    conditions: "Sun all the day and clean conditions",
                    personalRating: 3,
                    lat: 34.259499338972,
                    lon: -6.6812514111815,
                    location: "Mehdya Beach, Kenitra, Morocco",
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    spot: "/api/spots/1",
                    user: "/api/users/2",
                    comments: ["/api/comments/3"],
                    likes: ["/api/likes/2"],
                    medias: ["/api/media/4", "/api/media/5"],
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/sessions{?user}",
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
    //console.log("sessionList :", sessionList[0].member);
    const sessions = sessionList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (session) => {
        setSelectedItem(session);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        My Sessions
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/sessionNew"
                    >
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <SessionDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {sessions.map((session) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={session.id}
                                onClick={() => {
                                    onHandleClick(session);
                                }}
                            >
                                <SessionCardList
                                    key={session.id}
                                    {...session}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Session;
