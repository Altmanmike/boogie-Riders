import { useState, useEffect } from "react";

const SpotsFeedCardList = ({
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
    user,
    users,
    comments,
    sessions,
    likes,
    medias,
    visibility,
    visibleToGroups,
}) => {

    const ratingInputs = [1, 2, 3, 4, 5].map((level) => (
        <div
            key={level}
            className="mask mask-star bg-orange-400"
            aria-label={`${level} star`}
            aria-current={difficultyLevel === level}
        ></div>
    ));    

    return (
        <>
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
                    <strong>Difficulty:</strong>
                </p>

                <div className="rating mx-auto">{ratingInputs}</div>

                <div className="card-actions justify-around items-center mt-3">
                    <span className="text-sm text-gray-500">
                        <strong>Wave type:</strong>
                    </span>
                    <div className="badge badge-outline badge-sm md:badge-md lg:badge-md xl:badge-lg badge-primary transition-colors duration-200 text-xs">
                        {waveType}
                    </div>
                </div>
            </div>
        </>
    );
};
export default SpotsFeedCardList;