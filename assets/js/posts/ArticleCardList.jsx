const ArticleCardList = ({
    id,
    title,
    cover,
    content,
    description,
    createdAt,
    updatedAt,
    user,
    comments,
    likes,
    medias,
    visibility,
    visibleToGroups,
}) => {
    return (
        <>
            <figure className="">
                <img
                    src={cover}
                    alt="article"
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold justify-center text-gray-800 mb-2">
                    Article N°{id}
                </h2>
                <h3 className="card-title text-xl font-bold justify-center text-gray-800">
                    {title}
                </h3>
                <p className="text-sm text-normal text-justify text-gray-600 my-4">
                    {content.substring(0, 300)} [...]
                </p>
                <div className="card-actions justify-around items-center mt-auto">
                    <span className="text-sm text-gray-500">Write:</span>
                    <button className="badge badge-outline badge-sm md:badge-md lg:badge-md xl:badge-lg badge-primary transition-colors duration-200 text-xs">
                        {createdAt.toString().substring(0, 10)}
                    </button>
                </div>
            </div>
        </>
    );
};
export default ArticleCardList;