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

    const ratingInputs = [1, 2, 3, 4, 5].map((level) => (
        <div
            key={level}
            className="mask mask-star bg-orange-400"
            aria-label={`${level} star`}
            aria-current={personalRating === level}
        ></div>
    )); 

    return (
        <>
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
                    <div className="text-sm text-center">Difficulty:</div>
                    <div className="rating">{ratingInputs}</div>
                </div>
                <div className="flex justify-between items-center mt-auto gap-2 mb-4">
                    <div className="text-sm text-center">Duration:</div>
                    <div className="text-center badge badge-sm md:badge-md lg:badge-md xl:badge-lg badge-primary font-bold text-white p-4 shadow-md">
                        {duration} hours
                    </div>
                </div>                

                <div className="card-actions justify-around items-center mt-auto">
                    <span className="text-sm text-gray-500">Dates:</span>
                    <button className="btn btn-outline btn-sm md:btn-md lg:btn-md xl:btn-lg btn-primary transition-colors duration-200 text-xs">
                        The {date.toString().substring(0, 10)}
                    </button>
                </div>
            </div>
        </>
    );
};
export default SessionCardList;