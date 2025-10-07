import { useState } from "react";
import WetsuitDetails from "./WetsuitDetails";
import WetsuitCardList from "./WetsuitCardList";

const Wetsuit = () => {
    const wetsuitList = [
        {
            "@context": "/api/contexts/Wetsuit",
            "@id": "/api/wetsuits",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/wetsuits/1",
                    "@type": "Wetsuit",
                    id: 1,
                    brand: "GYROLL",
                    model: "SHIELD 4/3 ZIPPERLESS",
                    type: "Integral",
                    size: "M",
                    description:
                        "100% Super Stretch Eco Friendly Limestone Neoprene, Ultimate Flexibility and Form Fitting Comfort",
                    colors: ["Black", "Red", "Grey"],
                    gender: "man",
                    thickness: "4/3",
                    price: 319,
                    photo: "https://www.ogm-bodyboard-shop.com/4594-large_default/combinaison-gyroll-shield-43-zipperless-black-grey.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/1",
                },
                {
                    "@id": "/api/wetsuits/2",
                    "@type": "Wetsuit",
                    id: 2,
                    brand: "MDNS",
                    model: "MADNESS Superstretch Serie",
                    size: "S",
                    description:
                        "The PRIME top is my state-of-the-art Superstretch series.",
                    colors: ["Black"],
                    gender: "man and woman",
                    thickness: "2/2",
                    price: 45,
                    photo: "https://www.ogm-bodyboard-shop.com/5204-large_default/top-neoprene-madness.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/2",
                },
                {
                    "@id": "/api/wetsuits/3",
                    "@type": "Wetsuit",
                    id: 3,
                    brand: "WEST",
                    model: "ENFORCER-S SHORTY 2/2MM BACK ZIP",
                    size: "M",
                    description:
                        "The WEST Enforcer-S Flatlock Spring Suit 2/2 back zip wetsuit is specially designed for summer sessions.",
                    colors: ["White", "Black"],
                    gender: "man",
                    thickness: "2/2",
                    price: 75.9,
                    photo: "https://www.ogm-bodyboard-shop.com/5063-large_default/combinaison-west-enforcer-s-shorty-22mm-back-zip.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/3",
                },
            ],
        },
    ];
    //console.log("wetsuitList :", wetsuitList[0].member);
    const wetsuits = wetsuitList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (wetsuit) => {
        setSelectedItem(wetsuit);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-4xl font-bold text-center my-5">
                        Wetsuit
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/wetsuitNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <WetsuitDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {wetsuits.map((wetsuit) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={wetsuit.id}
                                onClick={() => {
                                    onHandleClick(wetsuit);
                                }}
                            >
                                <WetsuitCardList
                                    key={wetsuit.id}
                                    {...wetsuit}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Wetsuit;