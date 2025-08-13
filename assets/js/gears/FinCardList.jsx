const FinCardList = ({
    id,
    brand,    
    size,
    description,
    colors,
    price,
    photo,
    createdAt,
    updatedAt,
    user,
}) => {
    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="fin" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand}</h2>
                    <p>{colors}</p>
                    <div className="card-actions">
                        <p className="text-sm">{size}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FinCardList;