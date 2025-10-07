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
                <div className="text-center mx-auto font-bold p-4 mb-4">
                    Location: {location}
                </div>
                <div className="text-center mx-auto badge badge-sm md:badge-md lg:badge-md xl:badge-lg badge-primary font-bold text-white p-4 shadow-md mb-4">
                    Mail <a href={`mailto:${mail}`}>{mail}</a>
                </div>
                <div className="text-center mx-auto badge badge-sm md:badge-md lg:badge-md xl:badge-lg badge-primary font-bold text-white p-4 shadow-md mb-5">
                    Phone {phone}
                </div>
                <div className="text-center font-normal mb-4">
                    Website:{" "}
                    <a href={url} target="_blank">
                        <span className="font-bold">{url.split("/")[2]}</span>
                    </a>
                </div>

                <div className="card-actions justify-around items-center mt-auto">
                    <span className="text-sm text-gray-500">Added:</span>
                    <div className="badge badge-outline badge-sm md:badge-md lg:badge-md xl:badge-lg badge-primary transition-colors duration-200 text-xs">
                        {createdAt.toString().substring(0, 10)}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ClubsFeedCardList;