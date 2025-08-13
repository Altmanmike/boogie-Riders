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
                    filePath: "../../imgs/test.jpg",
                    type: "Image",
                    description: "Image test",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/1",
                    article: "/api/articles/1",
                },
                {
                    "@id": "/api/media/2",
                    "@type": "Media",
                    id: 2,
                    filePath: "../../public/build/img/test2.jpg",
                    type: "Image",
                    description: "Image test2",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/2",
                    spot: "/api/spots/1",
                },
                {
                    "@id": "/api/media/3",
                    "@type": "Media",
                    id: 3,
                    filePath: "../../public/build/img/test3.jpg",
                    type: "Image",
                    description: "Image test3",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
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
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/1",
                    session: "/api/sessions/1",
                },
                {
                    "@id": "/api/media/6",
                    "@type": "Media",
                    id: 6,
                    filePath: "https://www.youtube.com/embed/ZeivXGDX6Bk",
                    type: "Video",
                    description: "Video test",
                    createdAt: "2025-08-13T17:34:34+02:00",
                    updatedAt: "2025-08-13T17:34:34+02:00",
                    user: "/api/users/1",
                    article: "/api/articles/1",
                },
            ],
            view: {
                "@id": "/api/media?user=1",
                "@type": "PartialCollectionView",
            },
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
                                className=""
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
