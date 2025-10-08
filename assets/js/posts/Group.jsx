import { useState } from "react";
import GroupDetails from "./GroupDetails";
import GroupCardList from "./GroupCardList";

const Group = () => {
    const groupList = [
        {
            "@context": "/api/contexts/Group",
            "@id": "/api/groups",
            "@type": "Collection",
            totalItems: 1,
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
                        friends: [2, 3],
                    },
                    members: [
                        {
                            "@id": "/api/users/1",
                            "@type": "User",
                            id: 1,
                            lastname: "ADMIN",
                            firstname: "admin",
                            friends: [2, 3],
                        },
                        {
                            "@id": "/api/users/2",
                            "@type": "User",
                            id: 2,
                            lastname: "Sparrow",
                            firstname: "Jack",
                            friends: [1, 4],
                        },
                        {
                            "@id": "/api/users/3",
                            "@type": "User",
                            id: 3,
                            lastname: "TheKid",
                            firstname: "Billy",
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
            ],
            view: {
                "@id": "/api/groups?user=1",
                "@type": "PartialCollectionView",
            },
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
    //console.log("groupList :", groupList[0].member);
    const groups = groupList[0].member;

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
                    <h1 className="text-4xl font-bold text-center my-5">
                        My groups
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/groupNew"
                    >
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <GroupDetails {...selectedItem} onBack={handleBack} />
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
                                <GroupCardList key={group.id} {...group} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default Group;