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
                        country: "England"
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
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        My Friends
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/friendNew"
                    >
                        Add new
                    </a>
                </div>
                <div className="flex justify-center items-center mt-8 md:mt-10">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>Friend</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {friendships.map((fs) => (
                                    <tr key={fs.id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                                                        <img
                                                            src={`${fs.friend.photo}`}
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="gap-3">
                                                    <div className="font-bold text-sm sm:text-base xl:text-lg">
                                                        {fs.friend.firstname}{" "}
                                                        {fs.friend.lastname}
                                                    </div>
                                                    <div className="text-xs sm:text-sm xl:text-base opacity-50">
                                                        {fs.friend.country}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold text-xs sm:text-sm xl:text-base opacity-50">
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
