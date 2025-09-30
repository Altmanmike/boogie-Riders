import { useState } from "react";
import ClubsFeedDetails from "./ClubsFeedDetails";
import ClubsFeedCardList from "./ClubsFeedCardList";

const ClubsFeed = () => {
    const clubsFeedList = [
        {
            "@context": "/api/contexts/Club",
            "@id": "/api/clubs",
            "@type": "Collection",
            totalItems: 1,
            member: [
                {
                    "@id": "/api/clubs/1",
                    "@type": "Club",
                    id: 1,
                    name: "HCL OCEAN CLUB Ecole de surf et bodyboard",
                    cover: "https://www.lacanausurfcamp.fr/wp-content/uploads/2021/03/Hcl-ECOLE-Club-blanc-ombre-web.png",
                    description:
                        "Venez surfer, dans une ambiance familiale, pour les kids, les ados, les adultes ! Créée en 2000 par Cédric Grèze, l’école HCL est un état d’esprit, une ambiance, une famille. C’est la HCL Family ! Nous offrons des cours adaptés à chacun, en fonction de sa personnalité, de son rythme, de son évolution. Initiation ou perfectionnement, en surf ou en bodyboard, Cédric et son équipe vous encadrent au plus près, dans les vagues, dans la recherche du plaisir, de la convivialité, sans oublier la sécurité. L’école et le surf camp sont ouverts à l’année (sauf fêtes de Noël). Nous organisons également plusieurs Surf Trips dans l’année, avec suivi vidéo et debriefs.",
                    lat: 45.003735838938,
                    lon: -1.2008878417874,
                    location: "1 Av. Pierre Loti, 33680 Lacanau",
                    url: "https://www.lacanausurfcamp.fr/",
                    mail: "hcl.ecolesurf@gmail.com",
                    phone: "0687579528",
                    createdAt: "2025-09-04T21:56:56+02:00",
                    updatedAt: "2025-09-04T21:56:56+02:00",
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        id: 1,
                        lastname: "ADMIN",
                        firstname: "admin",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                    },
                    members: [
                        {
                            "@id": "/api/users/1",
                            "@type": "User",
                            id: 1,
                            lastname: "ADMIN",
                            firstname: "admin",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/2",
                            "@type": "User",
                            id: 2,
                            lastname: "Sparrow",
                            firstname: "Jack",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                        {
                            "@id": "/api/users/3",
                            "@type": "User",
                            id: 3,
                            lastname: "TheKid",
                            firstname: "Billy",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        },
                    ],
                    visibility: ["Public"],
                    visibleToGroups: [],
                    comments: ["/api/comments/14"],
                    likes: ["/api/likes/8"],
                    medias: ["/api/media/8"],
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/clubs{?user,user[],user}",
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
    //console.log("clubsFeedList :", clubList[0].member);
    const clubs = clubsFeedList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (club) => {
        setSelectedItem(club);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-4xl font-bold text-center my-5">
                        Club
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/clubNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <ClubsFeedDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {clubs.map((club) => (
                            <div
                                className=""
                                key={club.id}
                                onClick={() => {
                                    onHandleClick(club);
                                }}
                            >
                                <ClubsFeedCardList key={club.id} {...club} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ClubsFeed;
