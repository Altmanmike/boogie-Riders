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
                    date: "2025-09-01T07:00:00+02:00",
                    duration: 4,
                    conditions: "Sun all the day and clean conditions",
                    personalRating: 3,
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    spot: "/api/spots/1",
                    user: "/api/users/2",
                    comments: ["/api/comments/3"],
                    likes: ["/api/likes/2"],
                    medias: ["/api/media/4"],                    
                },
            ],
            view: {
                "@id": "/api/sessions?user=1",
                "@type": "PartialCollectionView",
            },
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
                    <h1 className="text-4xl font-bold text-center my-5">
                        Session
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/sessionNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <SessionDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {sessions.map((session) => (
                            <div
                                className=""
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
