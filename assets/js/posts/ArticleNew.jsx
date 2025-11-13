import { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import instance from "../axiosConfig";

const ArticleNew = ({ onlineUser }) => {

    const [mediasUserList, setMediasUserList] = useState([]);
    const [selectedMedias, setSelectedMedias] = useState([]);
    const [groupsUserList, setGroupsUserList] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [ttl, setTtl] = useState("");
    const [cvr, setCvr] = useState("");
    const [cntent, setCntent] = useState("");
    const [desc, setDesc] = useState("");
    const [crtdAt, setCrtdAt] = useState("");
    const [updtdAt, setUpdtdAt] = useState("");
    const [usr, setUsr] = useState(null);
    const [cmmnts, setCmmnts] = useState([]);
    const [lks, setLks] = useState([]);
    //const [mds, setMds] = useState([]);
    const [vsblt, setVsblt] = useState([]);
    //const [vsbltTGrps, setVsblTGrps] = useState([]);

    const fetchData = async (fct, endPoint) => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.get(endPoint);
            const data = response.data.member;            
            fct(data);
        } catch (error) {
            console.error(error);
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const userId = parseInt(onlineUser.substring(1, 2));

    const postData = async (endPoint) => {
        setLoading(true);
        setError(null);
        try {
            await instance
                .post(endPoint, {
                    title: ttl,
                    cover: cvr,
                    content: cntent,
                    description: desc,
                    user: `/api/users/${userId}`,
                    comments: cmmnts,
                    likes: lks,
                    medias: selectedMedias.map((m) => `/api/media/${m.id}`),
                    visibility: vsblt,
                    visibleToGroups: selectedGroups,
                })
                .then(function (response) {
                    console.log(response);
                });
        } catch (error) {
            console.error(error);
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }; 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            ttl,
            cvr,
            cntent,
            desc,
            usr,
            cmmnts,
            lks,
            selectedMedias,
            vsblt,
            selectedGroups,
        };
        //console.log("Formulaire article soumis :", formData);
        postData(articleNewEndPoint);
    };

    const handleMultiSelectChange = (e, setterFunction) => {
        const selectedOptions = Array.from(e.target.options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setterFunction(selectedOptions);
    };  
    
    const handleMultiSelectChangeBis = (e, setterFunction, sourceList = []) => {
        const selectedValues = Array.from(e.target.selectedOptions).map((option) =>
            parseInt(option.value)
        );
        const selectedObjects = sourceList.filter((item) =>
            selectedValues.includes(item.id)
        );
        setterFunction(selectedObjects);
    };

    const groupsUserEndPoint = "/groups?page=1&user="+userId;
    const mediasUserEndPoint = "/media?page=1&user="+userId;
    const articleNewEndPoint = "/articles";

    useEffect(() => { 
        setUsr(`/api/users/${userId}`);
        fetchData(setGroupsUserList, groupsUserEndPoint);
        fetchData(setMediasUserList, mediasUserEndPoint);        
    }, []);    

    const groups = groupsUserList; 
    const medias = mediasUserList;     
    //console.log("groups :", groups);
    return (
        <>
            <div className="container mx-auto m-10 w-2xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl h-full mb-100">
                <form className="mt-20 mx-10" onSubmit={handleSubmit}>
                    <div className="border-b border-gray-900/10 pt-1 pb-12">
                        <h2 className="card-title mt-10">Article profile</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label
                                    htmlFor="photo"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Cover
                                </label>
                                <img
                                    src=""
                                    alt="cover"
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
                                                htmlFor="cvr"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="cvr"
                                                    name="cvr"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={(e) =>
                                                        setCvr(e.target.value)
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
                            <div className="col-span-full">
                                <label
                                    htmlFor="ttl"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="ttl"
                                        name="ttl"
                                        type="text"
                                        placeholder="Title of your article."
                                        onChange={(e) => setTtl(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the title name"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="cntent"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Content
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="cntent"
                                        name="cntent"
                                        rows={3}
                                        placeholder="Content of your article."
                                        onChange={(e) =>
                                            setCntent(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Write the main content of the article."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write the main content of the article.
                                </p>
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
                                        placeholder="Description of your article."
                                        onChange={(e) =>
                                            setDesc(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Write a few sentences about this Fin."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write a few sentences about this Fin.
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="vsblt"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Visibility
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="vsblt"
                                        name="vsblt"
                                        onChange={(e) =>
                                            handleMultiSelectChange(e, setVsblt)
                                        }
                                        multiple
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select the article visiblity"
                                    >
                                        <option value="Public">Public</option>
                                        <option value="Friends">Friends</option>
                                        <option value="Private">Private</option>
                                        <option value="Group">Group</option>
                                    </select>
                                </div>
                            </div>

                            {vsblt.includes("Group") && (
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="groupsUserList"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Group(s) visibility
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="groupsUserList"
                                            name="groupsUserList"
                                            value={selectedGroups.map(
                                                (m) => m.id
                                            )}
                                            onChange={(e) =>
                                                handleMultiSelectChangeBis(
                                                    e,
                                                    setSelectedGroups,
                                                    groups
                                                )
                                            }
                                            multiple
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Select the article group(s) visiblity"
                                        >
                                            {groups.map((g, key) => (
                                                <option key={key} value={g.id}>
                                                    {g.id}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}

                            {medias.length >= 1 && (
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="mediasUserList"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Medias
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="mediasUserList"
                                            name="mediasUserList"
                                            value={selectedMedias.map(
                                                (m) => m.id
                                            )}
                                            onChange={(e) =>
                                                handleMultiSelectChangeBis(
                                                    e,
                                                    setSelectedMedias,
                                                    medias
                                                )
                                            }
                                            multiple
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Select the medias for the article"
                                        >
                                            {medias.map((md, key) => (
                                                <option key={key} value={md.id}>
                                                    {md.id}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}
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
export default ArticleNew;
