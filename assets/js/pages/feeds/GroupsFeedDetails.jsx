import {
    UserGroupIcon,
    PencilIcon,
    HandThumbUpIcon,
    MapIcon,
    MapPinIcon,
    CalendarDaysIcon,
    PhotoIcon,
} from "@heroicons/react/16/solid";

const GroupsFeedDetails = ({
    id,
    name,
    description,
    createdAt,
    updatedAt,
    user,
    members,
    articles,
    sessions,
    spots,
    events,
    medias,
    isJoinable,
}) => {
    return (
        <>
            <div className="container mx-auto p-4 md:p-10 max-w-full lg:max-w-4xl xl:max-w-6xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl mb-10">
                <div className="hero bg-base-200 rounded-box p-2 md:p-8 mb-4 md:mb-8">
                    <div className="hero-content flex-col lg:flex-row w-full">
                        <div className="flex flex-col flex-grow">
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="py-6">{description}</p>
                            <div className="text-center md:flex items-center space-x-4">
                                {isJoinable ? (
                                    <div className="badge badge-xs sm:badge-sm md:badge-md lg:badge-md xl:badge-lg badge-success">
                                        Open to the public
                                    </div>
                                ) : (
                                    <div className="badge badge-error">
                                        Private
                                    </div>
                                )}
                                <p className="text-sm text-gray-500 mb-2 ">
                                    Created at :{" "}
                                    {new Date(createdAt).toLocaleDateString()}
                                </p>
                                <a
                                    href={`/groupJoin/${id}`}
                                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-lg btn-primary mb-2"
                                >
                                    Join the group
                                </a>
                            </div>
                        </div>

                        <div className="flex-shrink-0 text-center">
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
                </div>

                <div role="tablist" className="tabs tabs-bordered mx-10">
                    <input
                        type="radio"
                        name="group_tabs"
                        role="tab"
                        className="tab"
                        aria-label="Activity Feed"
                        defaultChecked
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <p className="text-lg">Lastest publications...</p>
                    </div>

                    <input
                        type="radio"
                        name="group_tabs"
                        role="tab"
                        className="tab"
                        aria-label={`Members (${members.length})`}
                    />

                    <div role="tabpanel" className="tab-content p-10">
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Friends</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((m) => (
                                    <tr key={m.id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={`${m.photo}`}
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="gap-3">
                                                    <div className="font-bold">
                                                        {m.firstname}{" "}
                                                        {m.lastname}
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
                        aria-label="Stats"
                    />

                    <div role="tabpanel" className="tab-content">
                        <div className="flex flex-wrap gap-3 p-10">
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <UserGroupIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">Members</div>
                                    <div className="stat-value">
                                        {members.length}
                                    </div>
                                </div>
                            </div>

                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <PencilIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">Articles</div>
                                    <div className="stat-value">
                                        {articles.length}
                                    </div>
                                </div>
                            </div>

                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <MapIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">sessions</div>
                                    <div className="stat-value">
                                        {sessions.length}
                                    </div>
                                </div>
                            </div>

                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <MapPinIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">Spots</div>
                                    <div className="stat-value">
                                        {spots.length}
                                    </div>
                                </div>
                            </div>

                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <CalendarDaysIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">Events</div>
                                    <div className="stat-value">
                                        {events.length}
                                    </div>
                                </div>
                            </div>

                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <PhotoIcon className="size-7 text-primary self-center justify-self-end" />
                                    </div>
                                    <div className="stat-title">medias</div>
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
export default GroupsFeedDetails;
