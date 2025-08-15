const MediaCardList = ({
    id,
    filePath,
    type,
    description,
    createdAt,
    updatedAt,
    user,
    article,
    session,
    spot,
}) => {
    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                {type == "Image" ? (
                    <figure className="px-10 pt-10">
                        <img
                            src={filePath}
                            alt="media"
                            className="rounded-xl"
                        />
                    </figure>
                ) : (
                    <iframe
                        src={filePath}
                        title={id}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                <div className="card-body">
                    <h2 className="card-title justify-center">Media N°{id}</h2>
                    <h3 className="card-title text-sm justify-center">
                        Format type: {type}
                    </h3>
                    <p className="text-sm text-normal text-justify">
                        {description.substring(0, 300)} [...]
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-xs">
                            {createdAt.toString().substring(0, 10)}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MediaCardList;
