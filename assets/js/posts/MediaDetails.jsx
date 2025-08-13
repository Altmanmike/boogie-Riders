import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const MediaDetails = ({
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
    const [flpth, setFlpth] = useState(filePath);
    const [tp, setTp] = useState(type);    
    const [desc, setDesc] = useState(description);
    const [crtdAt, setCrtdAt] = useState(createdAt);
    const [updtdAt, setUpdtdAt] = useState(updatedAt);
    const [usr, setUsr] = useState(user);
    const [rtcl, setRtcl] = useState(article);
    const [sssn, setSssn] = useState(session);
    const [spt, setSpt] = useState(spot);

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
            filePath,
            type,
            description,
            createdAt,
            updatedAt,
            user,
            article,
            session,
            spot,
        };
        console.log("Formulaire article soumis :", formData);
    };

    return (
        <>
            <div className="container mx-auto m-10 w-2xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl h-full mb-100">
                <form className="mt-20 mx-10" onSubmit={handleSubmit}>
                    <div className="border-b border-gray-900/10 pt-1 pb-12">
                        <h2 className="card-title mt-10">Media profile</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {type == "Image" ? (
                                <div className="col-span-full">
                                    <label
                                        htmlFor="photo"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Image file
                                    </label>
                                    <img
                                        src={flpth}
                                        alt="flpth"
                                        className="photo-gear"
                                    />
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon
                                                aria-hidden="true"
                                                className="mx-auto size-12 text-gray-300"
                                            />
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="flpth"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="flpth"
                                                        name="flpth"
                                                        type="file"
                                                        className="sr-only"
                                                        onChange={(e) =>
                                                            setFlpth(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    or drag and drop
                                                </p>
                                            </div>
                                            <p className="text-xs/5">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-span-full">
                                    <label
                                        htmlFor="flpth"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Video youtube.com/xxx URL
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="flpth"
                                            name="flpth"
                                            type="text"
                                            placeholder="Insert the end of the url"
                                            value={flpth}
                                            onChange={(e) =>
                                                setFlpth(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Insert the end of the url"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="col-span-full">
                                <label
                                    htmlFor="tp"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Type
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="tp"
                                        name="tp"
                                        type="text"
                                        placeholder="Select the type"
                                        value={tp}
                                        onChange={(e) => setTp(e.target.value)}
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select the type"
                                    >
                                        <option value="Image">Image</option>
                                        <option value="Video">Video</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="desc"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="desc"
                                        name="desc"
                                        rows={3}
                                        value={desc}
                                        onChange={(e) =>
                                            setDesc(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Write a few sentences about this Fin."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write a few sentences about this media.
                                </p>
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
export default MediaDetails;
