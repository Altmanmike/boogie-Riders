import { useState } from "react";
import ArticlesFeedDetails from "./ArticlesFeedDetails";
import ArticlesFeedCardList from "./ArticlesFeedCardList";

const ArticlesFeed = () => {
    const articlesFeedList = [
        {
            "@context": "/api/contexts/Article",
            "@id": "/api/articles",
            "@type": "Collection",
            totalItems: 3,
            member: [
                {
                    "@id": "/api/articles/1",
                    "@type": "Article",
                    id: 1,
                    title: "Id incididunt esse aute dolore nostrud culpa ut culpa ea eiusmod minim non mollit.",
                    cover: "https://www.sports.gouv.fr/sites/default/files/2022-08/bodyboard-ffsurf-wecreative-jpg-490.jpg",
                    content:
                        "Aliquip veniam ad nisi quis consequat consectetur do quis occaecat pariatur. Cupidatat non proident aute ea. Mollit anim reprehenderit officia veniam ea nostrud.\r\n\r\n            Culpa deserunt adipisicing anim elit laborum cillum duis sunt voluptate adipisicing do aliqua eiusmod. Sunt est ullamco culpa exercitation ex tempor officia nulla minim cillum cillum minim. Proident voluptate sunt anim eiusmod consequat consectetur laboris aute ea ipsum laboris. Incididunt in consequat non esse in cillum enim exercitation.\r\n\r\n            Fugiat reprehenderit nulla et dolore enim aliquip occaecat. Dolore Lorem veniam cillum do enim officia duis. Eu nisi enim in minim deserunt veniam magna voluptate voluptate veniam incididunt. Eiusmod et sit tempor anim ea consectetur dolore est veniam adipisicing veniam aute. Consequat consectetur proident officia sint officia id sint pariatur.",
                    description:
                        "Fugiat pariatur enim mollit reprehenderit elit eiusmod est qui sit. Id magna consequat officia laborum. Aliqua elit ipsum anim esse mollit consectetur laborum duis velit pariatur consectetur tempor. Reprehenderit proident deserunt sit veniam labore fugiat fugiat. Non magna commodo sit labore nisi veniam ut. Quis Lorem do laboris ipsum ex voluptate non.",
                    createdAt: "2025-09-04T21:56:57+02:00",
                    updatedAt: "2025-09-04T21:56:57+02:00",
                    user: {
                        "@id": "/api/users/1",
                        "@type": "User",
                        roles: ["ROLE_ADMIN", "ROLE_USER"],
                        lastname: "ADMIN",
                        firstname: "admin",
                        pseudo: "BOB",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                    },
                    comments: [
                        {
                            "@id": "/api/comments/1",
                            "@type": "Comment",
                            id: 1,
                            content:
                                "Enim incididunt officia consectetur esse proident.",
                            createdAt: "2025-09-04T21:56:57+02:00",
                            updatedAt: "2025-09-04T21:56:57+02:00",
                            user: {
                                "@id": "/api/users/1",
                                "@type": "User",
                                roles: ["ROLE_ADMIN", "ROLE_USER"],
                                lastname: "ADMIN",
                                firstname: "admin",
                                pseudo: "BOB",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                        {
                            "@id": "/api/comments/2",
                            "@type": "Comment",
                            id: 2,
                            content:
                                "Est ea nulla excepteur Lorem tempor veniam exercitation. Labore esse fugiat non cillum. Qui dolore consectetur consectetur mollit ipsum aliquip fugiat non anim qui.",
                            createdAt: "2025-09-04T21:58:57+02:00",
                            updatedAt: "2025-09-04T21:58:57+02:00",
                            user: {
                                "@id": "/api/users/2",
                                "@type": "User",
                                roles: ["ROLE_USER"],
                                lastname: "Sparrow",
                                firstname: "Jack",
                                pseudo: "jck",
                                photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                            },
                        },
                    ],
                    likes: [
                        {
                            "@id": "/api/likes/1",
                            "@type": "Like",
                            id: 1,
                            liked: true,
                        },
                    ],
                    medias: [
                        {
                            "@id": "/api/media/1",
                            "@type": "Media",
                            id: 1,
                        },
                        {
                            "@id": "/api/media/2",
                            "@type": "Media",
                            id: 2,
                        },
                    ],
                    visibility: ["Public"],
                    visibleToGroups: [],
                },
                {
                    "@id": "/api/articles/2",
                    "@type": "Article",
                    id: 2,
                    title: "Enim anim aliquip qui sint laboris labore eiusmod.",
                    cover: "https://www.sports.gouv.fr/sites/default/files/2022-08/bodyboard-ffsurf-wecreative-jpg-490.jpg",
                    content:
                        "Aute qui sunt proident labore ut velit enim eu exercitation dolore. Anim officia proident ea in enim pariatur laborum in qui est dolor proident. Nostrud ad velit nulla quis nisi. Incididunt esse aliquip officia magna mollit sint labore eiusmod. Laborum nostrud aute Lorem fugiat deserunt pariatur sint non proident velit nulla fugiat cillum irure.\r\n\r\n            Fugiat dolor excepteur qui reprehenderit. Quis proident laborum ut occaecat nostrud tempor pariatur labore sit. Laboris pariatur fugiat nisi irure commodo nisi dolore. Quis magna fugiat voluptate velit nisi veniam. Ex voluptate fugiat labore aliquip exercitation sint tempor esse ullamco laboris. Mollit ullamco velit veniam incididunt cupidatat sunt aute dolor cupidatat.\r\n\r\n            Proident commodo aliqua culpa consectetur nulla in duis tempor. Duis deserunt id exercitation magna sunt sunt. Sit et est officia tempor id nulla aliquip ea nulla. Amet cupidatat aliquip enim fugiat nisi dolore. Sint laborum duis cupidatat dolor. Irure labore ut nostrud nostrud voluptate enim qui laboris aliqua culpa.\r\n\r\n            In ea sunt consequat est nisi ea sunt laborum eiusmod ullamco eu do reprehenderit. Voluptate officia dolor est mollit voluptate anim aute ea sint esse eiusmod. Aute et nisi exercitation tempor consectetur aute enim nostrud occaecat adipisicing anim. In mollit duis laborum nulla fugiat nostrud aute anim ex et nisi. Aliqua dolore sit ea consequat labore nulla ullamco sunt aliquip. Exercitation duis elit deserunt et reprehenderit esse eiusmod excepteur. Officia duis amet enim officia quis dolore minim consectetur amet.\r\n\r\n            Nulla ullamco officia elit dolor aute aute culpa elit culpa eu minim sint minim cillum. Fugiat officia nisi exercitation aliquip excepteur Lorem minim. Sunt dolor consequat occaecat enim.",
                    description:
                        "Voluptate culpa dolor consectetur amet voluptate eu. Dolor eiusmod adipisicing pariatur velit veniam commodo consectetur dolore eu excepteur proident aliqua dolor eiusmod. Exercitation tempor officia eu Lorem non nulla in est reprehenderit aliqua velit.",
                    createdAt: "2025-09-04T21:56:57+02:00",
                    updatedAt: "2025-09-04T21:56:57+02:00",
                    user: {
                        "@id": "/api/users/2",
                        "@type": "User",
                        roles: ["ROLE_USER"],
                        lastname: "Sparrow",
                        firstname: "Jack",
                        pseudo: "jck",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                    },
                    comments: [],
                    likes: [],
                    medias: [],
                    visibility: ["Public"],
                    visibleToGroups: [],
                },
                {
                    "@id": "/api/articles/3",
                    "@type": "Article",
                    id: 3,
                    title: "Proident commodo incididunt dolore deserunt eu sunt proident mollit velit enim enim incididunt et.",
                    cover: "https://www.sports.gouv.fr/sites/default/files/2022-08/bodyboard-ffsurf-wecreative-jpg-490.jpg",
                    content:
                        "Cillum cupidatat tempor quis magna qui tempor officia labore eiusmod eiusmod anim voluptate pariatur aliqua. Laboris dolore mollit ipsum voluptate fugiat eiusmod amet laboris elit tempor id labore. Voluptate commodo id nulla veniam. Dolore incididunt eu aute sit laborum est. Duis sit aliqua esse ullamco nostrud magna non occaecat sit ipsum.\r\n\r\n            Ut dolore officia sint veniam in. Esse consequat duis consectetur incididunt laborum deserunt magna proident culpa voluptate excepteur. Id nisi occaecat consequat nisi esse cupidatat irure dolore minim dolor aliqua sunt. Id nostrud eiusmod incididunt qui dolor ea ad. Ea magna eu irure occaecat esse irure cillum exercitation aliqua est quis. Proident ad exercitation veniam laborum eiusmod ut eiusmod.",
                    description:
                        "Eu duis mollit voluptate aute qui sint ullamco nisi. Velit dolore cillum est ut amet anim id ad ad. Adipisicing sunt est ad mollit pariatur nulla labore officia. Enim sit aliqua Lorem deserunt mollit deserunt culpa ut magna aliqua anim mollit. Excepteur velit dolor sit nulla sit duis excepteur non ullamco consectetur ad adipisicing in dolor. Quis cillum ad pariatur eu laborum eu. Qui adipisicing aliqua pariatur exercitation.",
                    createdAt: "2025-09-04T21:56:57+02:00",
                    updatedAt: "2025-09-04T21:56:57+02:00",
                    user: {
                        "@id": "/api/users/3",
                        "@type": "User",
                        roles: ["ROLE_USER"],
                        lastname: "TheKid",
                        firstname: "Billy",
                        pseudo: "btk",
                        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                    },
                    comments: [],
                    likes: [
                        {
                            "@id": "/api/likes/2",
                            "@type": "Like",
                            id: 2,
                            liked: true,
                        },
                    ],
                    medias: [],
                    visibility: ["Group", "Public"],
                    visibleToGroups: ["/api/groups/1"],
                },
            ],
            search: {
                "@type": "IriTemplate",
                template: "/api/articles{?user,user[],user}",
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
    //console.log("articlesFeedList :", articlesFeedList[0].member);
    const articlesFeed = articlesFeedList[0].member;

    const [selectedItem, setSelectedItem] = useState(null);

    const onHandleClick = (article) => {
        setSelectedItem(article);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        Article
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/articleNew"
                    >
                        Add new
                    </a>
                </div>
                {selectedItem ? (
                    <ArticlesFeedDetails
                        {...selectedItem}
                        onBack={handleBack}
                    />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {articlesFeed.map((article) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={article.id}
                                onClick={() => {
                                    onHandleClick(article);
                                }}
                            >
                                <ArticlesFeedCardList
                                    key={article.id}
                                    {...article}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default ArticlesFeed;