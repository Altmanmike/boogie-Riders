const SessionCardList = ({
    id,
    date,
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
                <div className="card-body">
                    <h2 className="card-title justify-center">Session at spot {spot}</h2>
                    <p className="text-sm text-normal text-justify">
                        Conditions : {conditions}
                    </p>
                    <p>Difficulty: {personalRating}/5</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-xs">
                            The {date.toString().substring(0, 10)} during{" "}
                            {duration} hours
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SessionCardList;