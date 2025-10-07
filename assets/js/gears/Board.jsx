import { useState } from "react";
import BoardDetails from "./BoardDetails";
import BoardCardList from "./BoardCardList";

const Board = () => {
    const boardList = [
        {
            "@context": "/api/contexts/Board",
            "@id": "/api/boards",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/boards/1",
                    "@type": "Board",
                    id: 1,
                    brand: "SCIENCE",
                    model: "MSCX- The Warp",
                    size: '41.5"',
                    description:
                        "The concept: A board that maintains maximum speed through turns.\r\nExperience full-throttle speed during long arcing turns or rail-to-rail transitions. The outer and inner rails work together, or as we call it, the Dual Delta tail, combined with the Deep Quad Vent channel system to provide maximum hold and control. This new tail allows for the smoothest turn transitions.\r\nDiscover it now!",
                    colors: ["Dark green", "Blue marine", "Black"],
                    core: "1.9PP Kinetic Polypro Core (PP)",
                    tail: "Dual Delta",
                    stringer: "1x Stringer",
                    mesh: "Wavecushion Air 8lb PE Deck",
                    slick: "Surlyn Slick Skin",
                    price: 419,
                    photoFront:
                        "https://www.ogm-bodyboard-shop.com/5109-large_default/bodyboard-science-mscx-the-warp.jpg",
                    photoBack:
                        "https://www.ogm-bodyboard-shop.com/5105-large_default/bodyboard-science-mscx-the-warp.jpg",
                    createdAt: "2025-08-11T16:45:55+02:00",
                    updatedAt: "2025-08-11T16:45:55+02:00",
                    user: "/api/users/3",
                },
                {
                    "@id": "/api/boards/2",
                    "@type": "Board",
                    id: 2,
                    brand: "QCD",
                    model: "Ultra 4X Concaves",
                    size: '41.5"',
                    description:
                        "The brand's highest-end model with its concave for optimal grip in hollow waves",
                    colors: ["Cyan", "Blue azur", "White"],
                    core: "PP",
                    tail: "Dual Delta",
                    stringer: "1x Carbonfibre",
                    mesh: "NXLPE",
                    slick: "SURLYN",
                    price: 329,
                    photoFront:
                        "https://www.ogm-bodyboard-shop.com/5149-large_default/bodyboard-qcd-ultra-4x-concaves.jpg",
                    photoBack:
                        "https://www.ogm-bodyboard-shop.com/5151-large_default/bodyboard-qcd-ultra-4x-concaves.jpg",
                    createdAt: "2025-08-11T16:45:55+02:00",
                    updatedAt: "2025-08-11T16:45:55+02:00",
                    user: "/api/users/1",
                },
                {
                    "@id": "/api/boards/3",
                    "@type": "Board",
                    id: 3,
                    brand: "MOREY",
                    model: "Mach 7-7 Pierre Louis Costes",
                    size: '41"',
                    description:
                        "Two-time World Champion and native Pierre Louis Costes unveils his Morey Mach 7-7 model. It features the champion's fast and taut shape for maximum speed and projection!",
                    colors: ["Black", "Yellow"],
                    core: "PP",
                    tail: "Crescent Tail",
                    stringer: "1x Carbonfibre",
                    mesh: "MESH",
                    slick: "Surlyn Slick Skin",
                    price: 379,
                    photoFront:
                        "https://www.ogm-bodyboard-shop.com/5139-large_default/bodyboard-morey-mach-7-7-pierre-louis-costes.jpg",
                    photoBack:
                        "https://www.ogm-bodyboard-shop.com/5219-large_default/bodyboard-morey-mach-7-7-pierre-louis-costes.jpg",
                    createdAt: "2025-08-11T16:45:55+02:00",
                    updatedAt: "2025-08-11T16:45:55+02:00",
                    user: "/api/users/2",
                },
            ],
        },
    ];
    //console.log("boardList :", boardList[0].member);
    const boards = boardList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (board) => {
        setSelectedItem(board);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };
    
    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-4xl font-bold text-center my-5">
                        Board
                    </h1>
                    <a className="btn btn-sm btn-neutral" href="/boardNew">
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <BoardDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {boards.map((board) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={board.id}
                                onClick={() => {
                                    onHandleClick(board);
                                }}
                            >
                                <BoardCardList key={board.id} {...board} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Board;
