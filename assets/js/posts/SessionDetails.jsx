import { useState } from "react";

const SessionDetails = ({
    id,
    date,
    duration,
    conditions,
    personalRating,
    createdAt,
    updatedAt,
    spot,
    user,
}) => {
    const [dt, setDt] = useState(date);
    const [drtn, setDrtn] = useState(duration);
    const [cndtns, setCndtns] = useState(conditions);
    const [prsnlrtng, setPrsnlrtng] = useState(personalRating);
    const [crtdAt, setCrtdAt] = useState(createdAt);
    const [updtdAt, setUpdtdAt] = useState(updatedAt);
    const [spt, setSpt] = useState(spot);
    const [usr, setUsr] = useState(user);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdatedAt(
            new Date().toLocaleDateString("en-EN", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        );
        const formData = {            
            date,
            duration,
            conditions,
            personalRating,
            createdAt,
            updatedAt,
            spot,
            user,
        };
        console.log("Formulaire event soumis :", formData);
    };
    
    return (
        <>
            <div className="container mx-auto m-10 w-2xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl h-full mb-100">
                <form className="mt-20 mx-10" onSubmit={handleSubmit}>
                    <div className="border-b border-gray-900/10 pt-1 pb-12">
                        <h2 className="card-title mt-10">Session profile</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="dt"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="dt"
                                        name="dt"
                                        type="datetime-local"
                                        placeholder="Event date start"
                                        value={dt}
                                        onChange={(e) => setDt(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the event date"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="drtn"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Duration
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="drtn"
                                        name="drtn"
                                        type="integer"
                                        placeholder="Session duration"
                                        value={drtn}
                                        onChange={(e) =>
                                            setDrtn(e.target.value)
                                        }
                                        min="1"
                                        max="8"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the session duration"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="cndtns"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Conditions
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="cndtns"
                                        name="cndtns"
                                        rows={3}
                                        value={cndtns}
                                        onChange={(e) =>
                                            setCndtns(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Write the main content of the article."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write the few sentences about the session.
                                </p>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="prsnlrtng"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Personal rating
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="prsnlrtng"
                                        name="prsnlrtng"
                                        type="integer"
                                        placeholder="Session personal rating"
                                        value={prsnlrtng}
                                        onChange={(e) =>
                                            setPrsnlrtng(e.target.value)
                                        }
                                        min="0"
                                        max="5"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the session personal rating"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6 pb-10">
                        <a
                            href="/"
                            className="btn text-sm/6 font-semibold text-gray-900"
                        >
                            Cancel
                        </a>
                        <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default SessionDetails;
