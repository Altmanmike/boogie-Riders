const MediaCardList = ({
    id,
    filePath,
    type,
    description,
    createdAt,
    updatedAt,
    user,
    article,
    session,
    spot,
}) => {
    return (
        <>
            {type == "Image" ? (
                <figure className="px-10 pt-10">
                    <img src={filePath} alt="media" className="rounded-xl" />
                </figure>
            ) : (
                <iframe
                    src={filePath}
                    title={id}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    className="rounded-t-lg"
                    allowfullscreen
                ></iframe>
            )}
            <div className="card-body">
                <h2 className="card-title justify-center">Media N°{id}</h2>
                <h3 className="card-title text-sm justify-center">
                    Format type: {type}
                </h3>
                <p className="text-sm text-normal text-justify">
                    {description.substring(0, 300)} [...]
                </p>
                <div className="card-actions justify-around items-center mt-3">
                    <span className="text-sm text-gray-500">Added:</span>
                    <button className="btn btn-outline btn-sm md:btn-md lg:btn-md xl:btn-lg btn-primary text-xs">
                        {createdAt.toString().substring(0, 10)}
                    </button>
                </div>
            </div>
        </>
    );
};
export default MediaCardList;
