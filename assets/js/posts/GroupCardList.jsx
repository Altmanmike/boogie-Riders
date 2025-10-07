const GroupCardList = ({
    id,
    name,
    description,
    createdAt,
    updatedAt,
    user,
    members,
    isJoinable
}) => {

    return (
        <>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-center text-gray-800 mb-2">
                    {name}
                </h2>
                <p className="text-normal text-justify text-gray-600 mb-4">
                    {description.substring(0, 300)} [...]
                </p>
                <div className="text-center mx-auto text-lg font-bold p-4 mb-4">
                    Rejoindre: {isJoinable}
                </div>
                <div className="card-actions justify-around items-center mt-auto">
                    <button className="btn btn-outline btn-sm md:btn-md lg:btn-md xl:btn-lg btn-primary transition-colors duration-200 text-xs">
                        {createdAt.toString().substring(0, 10)}
                    </button>
                </div>
            </div>
        </>
    );
};
export default GroupCardList;