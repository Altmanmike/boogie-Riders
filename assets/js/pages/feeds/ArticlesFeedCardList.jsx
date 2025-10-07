const ArticlesFeedCardList = ({
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
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-center text-gray-800">
                    {title}
                </h2>
                <figure>
                    <img src={cover} className="size-25" alt="" />
                </figure>
                <p className="text-normal text-justify text-gray-600 mb-1">
                    {content.substring(0, 100)} [...]
                </p>
                <p className="text-xs text-justify text-gray-600 mb-1">
                    {description.substring(0, 200)} [...]
                </p>

                <div className="card-actions justify-around items-center mt-auto">
                    by {user.pseudo} at
                    <div className="badge badge-outline badge-sm md:badge-md lg:badge-md xl:badge-lg badge-primary transition-colors duration-200 text-xs">
                        {createdAt.toString().substring(0, 10)}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ArticlesFeedCardList;