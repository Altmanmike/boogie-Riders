const EventCardList = ({
    id,
    name,
    description,
    dateStart,
    dateEnd,
    lat,
    lon,
    location,
    url,
    createdAt,
    updatedAt,
    user,
}) => {
    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p className="text-sm text-normal text-justify">
                        {description.substring(0, 300)} [...]
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-xs">
                            {dateStart.toString().substring(0, 10)}
                            {" to "}
                            {dateEnd.toString().substring(0, 10)}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EventCardList;