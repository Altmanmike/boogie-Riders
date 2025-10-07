const GroupsFeedCardList = ({
    id,
    name,
    description,
    createdAt,
    updatedAt,
    user,
    members,
    isJoinable,
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
                <div className="text-lg font-bold p-4">
                    <p className="text-normal text-justify text-gray-600 flex justify-between items-center">
                        Group accessibility{" "}
                        {isJoinable ? (
                            <span className="badge badge-success">
                                Joinable
                            </span>
                        ) : (
                            <span className="badge badge-error">Private</span>
                        )}
                    </p>
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
export default GroupsFeedCardList;