const AccessoryCardList = ({
    id,
    kind,
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
            <figure className="px-10 pt-10">
                <img src={photo} alt="accessory" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
                <p>{colors}</p>
                <div className="card-actions">
                    <p className="text-sm">
                        {kind},{size}
                    </p>
                </div>
            </div>            
        </>
    );
};
export default AccessoryCardList;