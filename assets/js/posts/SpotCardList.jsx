const SpotCardList = ({
    id,
    name,
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
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p className="text-sm text-normal text-justify">
                        {description.substring(0, 300)} [...]
                    </p>
                    <p>Best conditions: {bestConditions}</p>
                    <p>Difficulty: {difficultyLevel} / 5</p>
                    <p>Wave type: {waveType}</p>                    
                </div>
            </div>
        </>
    );
};
export default SpotCardList;