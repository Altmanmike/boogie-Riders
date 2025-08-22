const Friends = () => {
    const friendList = [
        {
            "@context": "/api/contexts/Friendship",
            "@id": "/api/friendships",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/friendships/1",
                    "@type": "Friendship",
                    id: 1,
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        lastname: "ADMIN",
                        firstname: "admin",
                        photo: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                    },
                    friend: {
                        "@id": "/api/users/2",
                        "@type": "User",
                        lastname: "Sparrow",
                        firstname: "Jack",
                        photo: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                    },
                    status: "Accepted",
                    createdAt: "2025-08-22T16:16:57+02:00",
                    updatedAt: "2025-08-22T16:16:57+02:00",
                },
                {
                    "@id": "/api/friendships/2",
                    "@type": "Friendship",
                    id: 2,
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        lastname: "ADMIN",
                        firstname: "admin",
                        photo: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                    },
                    friend: {
                        "@id": "/api/users/3",
                        "@type": "User",
                        lastname: "TheKid",
                        firstname: "Billy",
                        photo: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                    },
                    status: "Accepted",
                    createdAt: "2025-08-22T16:16:57+02:00",
                    updatedAt: "2025-08-22T16:16:57+02:00",
                },
                {
                    "@id": "/api/friendships/3",
                    "@type": "Friendship",
                    id: 3,
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        lastname: "ADMIN",
                        firstname: "admin",
                        photo: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                    },
                    friend: {
                        "@id": "/api/users/4",
                        "@type": "User",
                        lastname: "Doe",
                        firstname: "John",
                        photo: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                    },
                    status: "Pending",
                    createdAt: "2025-08-22T16:16:57+02:00",
                    updatedAt: "2025-08-22T16:16:57+02:00",
                },
            ],
            view: {
                "@id": "/api/friendships?user=1",
                "@type": "PartialCollectionView",
            },
            search: {
                "@type": "IriTemplate",
                template: "/api/friendships{?user,user[],user}",
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
    //console.log("articleList :", articleList[0].member);
    const friendships = friendList[0].member;

    return (
        <>
            <div className="container mx-auto h-full">
                <h1 className="mt-15 text-3xl text-center font-bold normal-case underline decoration-current-500">
                    Friends list
                </h1>

                <div className="container mx-auto m-10 w-100 rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl h-full mb-100">
                    <div className="overflow-x-auto">
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                    <th>Friend</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {friendships.map((fs) => (
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={`${fs.friend.photo}`}                                                          
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="gap-3">
                                                    <div className="font-bold">
                                                        {fs.friend.firstname}{" "}
                                                        {fs.friend.lastname}
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        {fs.friend.country}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold text-sm opacity-50">
                                                {fs.status}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Friends;
