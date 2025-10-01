import {    
    ChatBubbleOvalLeftIcon,
    HandThumbUpIcon,
    PhotoIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

const ArticlesFeedDetails = ({
    id,
    title,
    cover,
    content,
    description,
    createdAt,
    updatedAt,
    user,
    comments,
    likes,
    medias,
    visibility,
    visibleToGroups,
}) => {

    const [cmmnts, setCmmnts] = useState(comments);    
    
    useEffect(() => {        
        setCmmnts([...cmmnts].reverse());        
    }, []);
    
    return (
        <>
            <div className="container mx-auto p-4 md:p-10 max-w-full lg:max-w-4xl xl:max-w-6xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl mb-10">
                <div className="hero bg-base-200 rounded-box p-2 md:p-8">
                    <div className="hero-content flex-col lg:flex-row w-full">
                        <div className="flex flex-col flex-grow">
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <img
                                src={cover}
                                className="h-auto object-cover pt-6 my-5"
                                alt=""
                            />
                            <p className="text-justify pt-6">{content}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-around items-center mt-8 mb-8 md:mb-10 lg:mb-12 xl:mb-15">
                    <p className="text-justify text-xs md:text-sm max-w-3xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl mb-5">
                        {description}
                    </p>
                    <div className="text-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photo} alt="Creator" />
                            </div>
                        </div>
                        <p className="font-bold text-sm mt-1">by</p>
                        <p className="text-sm mt-1">
                            {user.firstname} {user.lastname}
                        </p>
                    </div>
                </div>

                <div role="tablist" className="tabs tabs-bordered mx-10">
                    <input
                        type="radio"
                        name="group_tabs"
                        role="tab"
                        className="tab"
                        aria-label="Comments Feed"
                        defaultChecked
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <p className="text-lg mb-5">Lastest comments...</p>
                        {cmmnts.map((c) => (
                            <div key={c.id} className="chat chat-start mb-2">
                                <div className="chat-image avatar">
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
                        aria-label="Stats"
                    />
                    <div role="tabpanel" className="tab-content">
                        <div className="flex flex-wrap gap-3 p-10">
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
export default ArticlesFeedDetails;
