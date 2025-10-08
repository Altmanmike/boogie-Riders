import { useState } from "react";
import GroupsFeedDetails from "./GroupsFeedDetails";
import GroupsFeedCardList from "./GroupsFeedCardList";

const GroupsFeed = () => {
    const groupsFeedList = [
        {
            "@context": "/api/contexts/Group",
            "@id": "/api/groups",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/groups/1",
                    "@type": "Group",
                    id: 1,
                    name: "Old friends",
                    description: "A group started by some friends ...",
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        id: 1,
                        lastname: "ADMIN",
                        firstname: "admin",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        friends: [2, 3],
                    },
                    members: [
                        {
                            "@id": "/api/users/2",
                            "@type": "User",
                            id: 2,
                            lastname: "Sparrow",
                            firstname: "Jack",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            friends: [1, 4],
                        },
                        {
                            "@id": "/api/users/3",
                            "@type": "User",
                            id: 3,
                            lastname: "TheKid",
                            firstname: "Billy",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            friends: [1],
                        },
                    ],
                    createdAt: "2025-09-04T21:56:56+02:00",
                    updatedAt: "2025-09-04T21:56:56+02:00",
                    accessories: [],
                    articles: ["/api/articles/3"],
                    boards: [],
                    fins: [],
                    leashes: [],
                    medias: [],
                    sessions: [],
                    spots: [],
                    wetsuits: [],
                    clubs: [],
                    events: [],
                    isJoinable: true,
                },
                {
                    "@id": "/api/groups/2",
                    "@type": "Group",
                    id: 2,
                    name: "Medhya Maroc admins team",
                    description: "People from the event and locals",
                    user: {
                        "@id": "/api/users/2",
                        "@type": "User",
                        id: 2,
                        lastname: "Sparrow",
                        firstname: "Jack",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        friends: [1, 4],
                    },
                    members: [
                        {
                            "@id": "/api/users/1",
                            "@type": "User",
                            id: 1,
                            lastname: "ADMIN",
                            firstname: "admin",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            friends: [2, 3],
                        },
                        {
                            "@id": "/api/users/2",
                            "@type": "User",
                            id: 2,
                            lastname: "Sparrow",
                            firstname: "Jack",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            friends: [1, 4],
                        },
                        {
                            "@id": "/api/users/3",
                            "@type": "User",
                            id: 3,
                            lastname: "TheKid",
                            firstname: "Billy",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            friends: [1],
                        },
                    ],
                    createdAt: "2025-09-04T21:56:56+02:00",
                    updatedAt: "2025-09-04T21:56:56+02:00",
                    accessories: [],
                    articles: [],
                    boards: [],
                    fins: [],
                    leashes: [],
                    medias: [
                        "/api/media/3",
                        "/api/media/4",
                        "/api/media/5",
                        "/api/media/6",
                    ],
                    sessions: ["/api/sessions/1"],
                    spots: ["/api/spots/2"],
                    wetsuits: [],
                    clubs: [],
                    events: ["/api/events/2"],
                    isJoinable: false,
                },
                {
                    "@id": "/api/groups/3",
                    "@type": "Group",
                    id: 3,
                    name: "Club lambda",
                    description: "Group from club members",
                    user: {
                        "@id": "/api/users/4",
                        "@type": "User",
                        id: 4,
                        lastname: "Doe",
                        firstname: "John",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                        friends: [2],
                    },
                    members: [
                        {
                            "@id": "/api/users/2",
                            "@type": "User",
                            id: 2,
                            lastname: "Sparrow",
                            firstname: "Jack",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            friends: [1, 4],
                        },
                        {
                            "@id": "/api/users/3",
                            "@type": "User",
                            id: 3,
                            lastname: "TheKid",
                            firstname: "Billy",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            friends: [1],
                        },
                        {
                            "@id": "/api/users/4",
                            "@type": "User",
                            id: 4,
                            lastname: "Doe",
                            firstname: "John",
                            photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            friends: [2],
                        },
                    ],
                    createdAt: "2025-09-04T21:56:56+02:00",
                    updatedAt: "2025-09-04T21:56:56+02:00",
                    accessories: [],
                    articles: [],
                    boards: [],
                    fins: [],
                    leashes: [],
                    medias: ["/api/media/7", "/api/media/8"],
                    sessions: [],
                    spots: [],
                    wetsuits: [],
                    clubs: [],
                    events: ["/api/events/5"],
                    isJoinable: true,
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/groups{?user,user[],user}",
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
    //console.log("groupsFeedList :", groupList[0].member);
    const groups = groupsFeedList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (group) => {
        setSelectedItem(group);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        Group
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/groupNew"
                    >
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <GroupsFeedDetails {...selectedItem} onBack={handleBack} />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {groups.map((group) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={group.id}
                                onClick={() => {
                                    onHandleClick(group);
                                }}
                            >
                                <GroupsFeedCardList key={group.id} {...group} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default GroupsFeed;
