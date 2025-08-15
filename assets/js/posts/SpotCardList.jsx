const SpotCardList = ({
    id,
    name,
    cover,
    lat,
    lon,
    location,
    description,
    waveType,
    bestConditions,
    difficultyLevel,
    createdAt,
    updatedAt,
}) => {
    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img src={cover} alt="spot" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p className="text-sm text-normal text-justify">
                        {description.substring(0, 300)} [...]
                    </p>
                    <p className="text-sm text-normal text-justify">
                        Best conditions: {bestConditions}
                    </p>
                    <p className="text-sm text-center">
                        <strong>Difficulty:</strong> {difficultyLevel} / 5
                    </p>
                    <p className="text-sm text-center">
                        <strong>Wave type:</strong> {waveType}
                    </p>
                </div>
            </div>
        </>
    );
};
export default SpotCardList;