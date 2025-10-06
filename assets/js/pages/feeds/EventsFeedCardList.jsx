const EventsFeedCardList = ({
    id,
    name,
    cover,
    description,
    dateStart,
    dateEnd,
    lat,
    lon,
    location,
    url,
    rewards,
    createdAt,
    updatedAt,
    user,
    users,
    comments,
    likes,
    medias,
    visibility,
    visibleToGroups,
}) => {
    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                <figure className="">
                    <img
                        src={cover}
                        alt="event"
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-center text-gray-800 mb-2">
                        {name}
                    </h2>
                    <p className="text-normal text-justify text-gray-600 mb-4">
                        {description.substring(0, 300)} [...]
                    </p>
                    <div className="text-center mx-auto badge badge-primary text-lg font-bold text-white p-4 mt-3 mb-4 shadow-md">
                        Total cash price: ${rewards} USD
                    </div>
                    <div className="card-actions justify-around items-center mt-auto">
                        <span className="text-sm text-gray-500">Dates:</span>
                        <div className="badge badge-outline badge-sm badge-primary transition-colors duration-200 text-xs">
                            {dateStart.toString().substring(0, 10)}
                            {" to "}
                            {dateEnd.toString().substring(0, 10)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EventsFeedCardList;