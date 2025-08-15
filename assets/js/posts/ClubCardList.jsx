const ClubCardList = ({
    id,
    name,
    cover,
    description,
    lat,
    lon,
    location,
    url,
    mail,
    phone,
    createdAt,
    updatedAt,
    user,
}) => {

    return (
        <>
            <div className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm">
                <figure className="">
                    <img
                        src={cover}
                        alt="club"
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-center text-gray-800 mb-2">
                        {name}
                    </h2>
                    <p className="text-normal text-justify text-gray-600 mb-4">
                        {description.substring(0, 300)} [...]
                    </p>
                    <div className="text-center mx-auto text-lg font-bold p-4 mb-4">
                        Location: {location}
                    </div>
                    <div className="text-center mx-auto badge badge-primary text-lg font-bold text-white p-4 shadow-md mb-4">
                        Mail <a href={`mailto:${mail}`}>{mail}</a>
                    </div>
                    <div className="text-center mx-auto badge badge-primary text-lg font-bold text-white p-4 shadow-md mb-5">
                        Phone {phone}
                    </div>
                    <div className="card-actions justify-around items-center mt-auto">
                        <span className="text-sm text-gray-500">URL:</span>
                        <button className="btn btn-outline btn-sm btn-primary transition-colors duration-200 text-xs">
                            <a href={url} target="blank_" >{url}</a>                           
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ClubCardList;