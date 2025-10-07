import { useState } from "react";
import AccessoryDetails from "./AccessoryDetails";
import AccessoryCardList from "./AccessoryCardList";

const Accessory = () => {
    const accessoryList = [
        {
            "@context": "/api/contexts/Accessory",
            "@id": "/api/accessories",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/accessories/1",
                    "@type": "Accessory",
                    id: 1,
                    kind: "Fins stuff",
                    brand: "GYROLL",
                    size: "L",
                    description: "Neoprene Fins socks.",
                    colors: ["Black", "Yellow"],
                    price: 16,
                    photo: "https://www.ogm-bodyboard-shop.com/5308-large_default/gyroll-fins-socks-chaussons-neoprene.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/1",
                },
                {
                    "@id": "/api/accessories/2",
                    "@type": "Accessory",
                    id: 2,
                    kind: "Wear",
                    brand: "SCIENCE",
                    size: "XL",
                    description: "Fuse Hooded Sweatshirt.",
                    colors: ["Black"],
                    price: 75,
                    photo: "https://www.ogm-bodyboard-shop.com/5233-large_default/sweatshirt-science-fuse-hooded-.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/2",
                },
                {
                    "@id": "/api/accessories/3",
                    "@type": "Accessory",
                    id: 3,
                    kind: "Plug",
                    brand: "PLUG",
                    colors: ["Black"],
                    price: 3,
                    photo: "https://www.ogm-bodyboard-shop.com/5044-large_default/plug-creatures.jpg",
                    createdAt: "2025-08-13T12:03:36+02:00",
                    updatedAt: "2025-08-13T12:03:36+02:00",
                    user: "/api/users/3",
                },
            ],
        },
    ];
    //console.log("accessoryList :", accessoryList[0].member);
    const accessories = accessoryList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (accessory) => {
        setSelectedItem(accessory);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-4xl font-bold text-center my-5">
                        Accessory
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/accessoryNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <AccessoryDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {accessories.map((accessory) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={accessory.id}
                                onClick={() => {
                                    onHandleClick(accessory);
                                }}
                            >
                                <AccessoryCardList
                                    key={accessory.id}
                                    {...accessory}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Accessory;