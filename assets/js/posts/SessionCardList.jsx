const SessionCardList = ({
    id,
    cover,
    date,
    description,
    duration,
    conditions,
    personalRating,
    createdAt,
    updatedAt,
    spot,
    user,
}) => {
    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                <figure className="">
                    <img
                        src={cover}
                        alt="session"
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-center text-gray-800 mb-2">
                        Session at spot "{spot.substring(11, 12)}"
                    </h2>
                    <p className="text-normal text-normal text-justify mt-2 ">
                        {description.substring(0, 300)} [...]
                    </p>
                    <p className="text-lg text-justify text-gray-600 mt-3 mb-4">
                        {conditions}
                    </p>
                    <div className="flex justify-between items-center mt-auto gap-2 mb-4">
                        <div className="text-center badge badge-primary text-lg font-bold text-white p-4 shadow-md">
                            Difficulty {personalRating}/5
                        </div>
                        <div className="text-center badge badge-primary text-lg font-bold text-white p-4 shadow-md">
                            Duration {duration} hours
                        </div>
                    </div>

                    <div className="card-actions justify-around items-center mt-auto">
                        <span className="text-sm text-gray-500">Dates:</span>
                        <button className="btn btn-outline btn-sm btn-primary transition-colors duration-200 text-xs">
                            The {date.toString().substring(0, 10)}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SessionCardList;