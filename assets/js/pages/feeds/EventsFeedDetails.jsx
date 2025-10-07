import { useState, useEffect } from "react";
import {    
    UserGroupIcon,
    ChatBubbleOvalLeftIcon,
    HandThumbUpIcon,
    PhotoIcon,
} from "@heroicons/react/24/solid";

const EventsFeedDetails = ({
    id,
    name,
    cover,
    description,
    dateStart,
    dateEnd,
    lat,
    lon,
    location,
    url,
    rewards,
    createdAt,
    updatedAt,
    user,
    users,
    comments,
    likes,
    medias,
    visibility,
    visibleToGroups,
}) => {   

    const [cmmnts, setCmmnts] = useState(comments); 

    useEffect(() => {
        setCmmnts([...cmmnts].reverse());
        let map = null;
        const mapElement = document.getElementById("map");

        if (mapElement) {
            map = L.map("map").setView([lat, lon], 10);

            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            L.marker([lat, lon])
                .addTo(map)
                .bindPopup(`<b>${name}</b><br>${location}`)
                .openPopup();
        }

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [lat, lon, name, location]);

    return (
        <>
            <div className="container mx-auto p-4 md:p-10 max-w-full lg:max-w-4xl xl:max-w-6xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl mb-10">
                <div className="hero bg-base-200 rounded-box p-2 md:p-8 mb-4 md:mb-8">
                    <div className="hero-content flex-col lg:flex-row w-full">
                        <div className="flex flex-col flex-grow">
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="text-justify py-6">{description}</p>
                            <div className="flex items-center space-x-4 mb-2">
                                <p className="text-sm text-gray-500">
                                    Total cash price:
                                </p>
                                <div className="text-justify badge badge-xs sm:badge-sm md:badge-md lg:badge-md xl:badge-lg badge-primary font-bold text-white p-4 mt-3 mb-4 shadow-md">
                                    ${rewards} USD
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mb-5">
                                <p className="text-sm text-gray-500">Time:</p>
                                <div className="badge badge-outline badge-primary transition-colors duration-200 text-xs">
                                    {dateStart.toString().substring(0, 10)}
                                    {" to "}
                                    {dateEnd.toString().substring(0, 10)}
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <p className="text-sm text-gray-500">
                                    Live url :
                                </p>
                                <a
                                    href={`${url}/live`}
                                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-lg btn-primary"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-around items-center">
                    <img
                        src={cover}
                        className="max-w-3xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl h-auto object-cover"
                        alt=""
                    />

                    <div className="text-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photo} alt="Admin" />
                            </div>
                        </div>
                        <p className="font-bold text-sm mt-1">Admin</p>
                        <p className="text-sm mt-1">
                            {user.firstname} {user.lastname}
                        </p>
                    </div>
                </div>

                <div className="text-left mx-14 mt-4 md:mt-12">
                    <p className="text-sm text-gray-500">
                        Created at : {new Date(createdAt).toLocaleDateString()}
                    </p>
                </div>

                <div
                    role="tablist"
                    className="tabs tabs-bordered mx-10 mt-8 md:mt-14"
                >
                    <input
                        type="radio"
                        name="group_tabs"
                        role="tab"
                        className="tab"
                        aria-label="Comments Feed"
                        defaultChecked
                    />
                    <div role="tabpanel" className="tab-content md:p-10">
                        {cmmnts.map((c) => (
                            <div key={c.id} className="chat chat-start mb-2">
                                <div className="chat-image avatar self-center">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src={c.user.photo}
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {c.user.pseudo}
                                    <time className="text-xs opacity-50">
                                        {c.createdAt
                                            .toString()
                                            .substring(11, 16)}
                                    </time>
                                </div>
                                <div className="chat-bubble">{c.content}</div>
                            </div>
                        ))}
                    </div>

                    <input
                        type="radio"
                        name="group_tabs"
                        role="tab"
                        className="tab"
                        aria-label={`Members (${users.length})`}
                    />

                    <div role="tabpanel" className="tab-content p-10">
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Followers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => (
                                    <tr key={u.id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={`${u.photo}`}
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="gap-3">
                                                    <div className="font-bold">
                                                        {u.firstname}{" "}
                                                        {u.lastname}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <input
                        type="radio"
                        name="group_tabs"
                        role="tab"
                        className="tab"
                        aria-label="Contact"
                    />

                    <div role="tabpanel" className="tab-content p-10">
                        <div className="flex flex-col flex-grow">
                            <a
                                href={url}
                                className="text-md lg:text-lg mb-5"
                                target="_blank"
                            >
                                {url.split("/")[2]}
                            </a>
                        </div>
                    </div>

                    <input
                        type="radio"
                        name="group_tabs"
                        role="tab"
                        className="tab"
                        aria-label="Location"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <div
                            id="map"
                            className="mx-auto max-w-3xs sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
                        ></div>
                    </div>

                    <input
                        type="radio"
                        name="group_tabs"
                        role="tab"
                        className="tab"
                        aria-label="Stats"
                    />

                    <div role="tabpanel" className="tab-content">
                        <div className="flex flex-wrap gap-3 p-10">
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <UserGroupIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">Followers</div>
                                    <div className="stat-value">
                                        {users.length}
                                    </div>
                                </div>
                            </div>

                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <ChatBubbleOvalLeftIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">Comments</div>
                                    <div className="stat-value">
                                        {comments.length}
                                    </div>
                                </div>
                            </div>

                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <HandThumbUpIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">Likes</div>
                                    <div className="stat-value">
                                        {likes.length}
                                    </div>
                                </div>
                            </div>

                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <PhotoIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">Medias</div>
                                    <div className="stat-value">
                                        {medias.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EventsFeedDetails;
