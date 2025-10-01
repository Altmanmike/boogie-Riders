const ClubsFeedCardList = ({
    id,
    name,
    cover,
    description,
    lat,
    lon,
    location,
    url,
    mail,
    phone,
    createdAt,
    updatedAt,
    user,
    members,
    visibility,
    visibleToGroups,
    comments,
    likes,
    medias,
}) => {
    
    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-center text-gray-800">
                        {name}
                    </h2>
                    <figure>
                        <img src={cover} className="size-25" alt="" />
                    </figure>
                    <p className="text-normal text-justify text-gray-600 mb-1">
                        {description.substring(0, 300)} [...]
                    </p>
                    <div className="text-justify font-normal mb-4">
                        Website:{" "}
                        <a href={url} target="_blank">
                            <span className="font-bold">
                                {url.split("/")[2]}
                            </span>
                        </a>
                    </div>

                    <div className="card-actions justify-around items-center mt-auto">
                        <span className="text-sm text-gray-500">Added:</span>
                        <button className="btn btn-outline btn-sm btn-primary transition-colors duration-200 text-xs">
                            {createdAt.toString().substring(0, 10)}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ClubsFeedCardList;