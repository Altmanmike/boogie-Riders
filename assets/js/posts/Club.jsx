import { useState } from "react";
import ClubDetails from "./ClubDetails";
import ClubCardList from "./ClubCardList";

const Club = () => {
    const clubList = [
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
                    createdAt: "2025-08-15T16:06:25+02:00",
                    updatedAt: "2025-08-15T16:06:25+02:00",
                    user: "/api/users/1",
                    members: ["/api/users/1", "/api/users/2", "/api/users/3"],
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/clubs{?}",
                variableRepresentation: "BasicRepresentation",
                mapping: [],
            },
        },
    ];
    //console.log("clubList :", clubList[0].member);
    const clubs = clubList[0].member;

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
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        My Clubs
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/clubNew"
                    >
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <ClubDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {clubs.map((club) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={club.id}
                                onClick={() => {
                                    onHandleClick(club);
                                }}
                            >
                                <ClubCardList key={club.id} {...club} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Club;