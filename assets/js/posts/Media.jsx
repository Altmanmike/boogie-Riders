import { useState } from "react";
import MediaDetails from "./MediaDetails";
import MediaCardList from "./MediaCardList";

const Media = () => {
    const mediaList = [
        {
            "@context": "/api/contexts/Media",
            "@id": "/api/media",
            "@type": "Collection",
            totalItems: 5,
            member: [
                {
                    "@id": "/api/media/1",
                    "@type": "Media",
                    id: 1,
                    filePath:
                        "https://ibcworldtour.com/wp-content/uploads/2024/09/armide-pierreA.jpg",
                    type: "Image",
                    description: "Two contenders for the world title",
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/1",
                    article: "/api/articles/1",
                },
                {
                    "@id": "/api/media/2",
                    "@type": "Media",
                    id: 2,
                    filePath:
                        "https://ibcworldtour.com/wp-content/uploads/2025/08/05.jpg",
                    type: "Image",
                    description: "from Morocco again takes the win",
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/2",
                    spot: "/api/spots/2",
                },
                {
                    "@id": "/api/media/3",
                    "@type": "Media",
                    id: 3,
                    filePath:
                        "https://ibcworldtour.com/wp-content/uploads/2024/09/armide-pierreA.jpg",
                    type: "Image",
                    description: "Image test3",
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/3",
                    article: "/api/articles/1",
                },
                {
                    "@id": "/api/media/4",
                    "@type": "Media",
                    id: 4,
                    filePath: "../../public/build/img/test4.jpg",
                    type: "Image",
                    description: "Image test4",
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/1",
                    session: "/api/sessions/1",
                },
                {
                    "@id": "/api/media/5",
                    "@type": "Media",
                    id: 5,
                    filePath: "https://youtube.com/embed/lBxcXqRujog",
                    type: "Video",
                    description: "IBC 2025 trailer",
                    createdAt: "2025-08-14T15:55:47+02:00",
                    updatedAt: "2025-08-14T15:55:47+02:00",
                    user: "/api/users/1",
                    session: "/api/sessions/1",
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/media{?user}",
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
    //console.log("mediaList :", mediaList[0].member);
    const medias = mediaList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (media) => {
        setSelectedItem(media);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-4xl font-bold text-center my-5">
                        Media
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/mediaNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <MediaDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {medias.map((media) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={media.id}
                                onClick={() => {
                                    onHandleClick(media);
                                }}
                            >
                                <MediaCardList key={media.id} {...media} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Media;
