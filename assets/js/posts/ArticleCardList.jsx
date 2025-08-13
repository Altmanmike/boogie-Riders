const ArticleCardList = ({
    id,
    title,
    cover,
    content,
    description,
    createdAt,
    updatedAt,
    user,
}) => {
    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img src={cover} alt="article" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">
                        Article N°{id}
                    </h2>
                    <h3 className="card-title text-sm justify-center">
                        {title}
                    </h3>
                    <p className="text-sm text-normal text-justify">
                        {content.substring(0, 300)} [...]
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
export default ArticleCardList;