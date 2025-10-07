const WetsuitCardList = ({
    id,
    brand,
    model,
    type,
    size,
    description,
    colors,
    gender,
    thickness,
    price,
    photo,
    createdAt,
    updatedAt,
    user,
}) => {
    return (
        <>            
            <figure className="px-10 pt-10">
                <img src={photo} alt="wetsuit" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
                <p>{colors}</p>
                <div className="card-actions">
                    <p className="text-sm">
                        {thickness},
                        {size}
                    </p>
                </div>
            </div>   
        </>
    );
};
export default WetsuitCardList;
