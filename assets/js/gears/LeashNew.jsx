import { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import instance from "../axiosConfig";

const LeashNew = ({ onlineUser }) => {

    const [groupsUserList, setGroupsUserList] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [brnd, setBrnd] = useState("");
    const [tp, setTp] = useState("");
    const [sz, setSz] = useState("");
    const [desc, setDesc] = useState("");
    const [clrs, setClrs] = useState([]);
    const [prc, setPrc] = useState(0.0);
    const [pht, setPht] = useState("");
    const [crtdAt, setCrtdAt] = useState("");
    const [updtdAt, setUpdtdAt] = useState("");
    const [usr, setUsr] = useState(null);
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
                    brand: brnd,
                    type: tp,
                    size: sz,
                    description: desc,
                    colors: clrs,
                    price: parseFloat(prc),
                    photo: pht,
                    user: `/api/users/${userId}`,
                    visibility: vsblt,
                    visibleToGroups: selectedGroups.map(
                        (g) => `/api/groups/${g.id}`
                    ),
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
            brnd,
            tp,
            sz,
            desc,
            clrs,
            prc,
            pht,
            usr,
            vsblt,
            selectedGroups,
        };
        //console.log("Formulaire leash soumis :", formData);
        postData(leashNewEndPoint);
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

    const groupsUserEndPoint = "/groups?page=1&user=" + userId;        
    const leashNewEndPoint = "/leashes";
    
    useEffect(() => {
        setUsr(`/api/users/${userId}`);
        fetchData(setGroupsUserList, groupsUserEndPoint);                      
    }, []);
    
    const groups = groupsUserList; 

    return (
        <>
            <div className="container mx-auto m-10 w-2xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl h-full mb-100">
                <form className="mt-20 mx-10" onSubmit={handleSubmit}>
                    <div className="border-b border-gray-900/10 pt-1 pb-12">
                        <h2 className="card-title mt-10">Leash profile</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="brnd"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Brand
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="brnd"
                                        name="brnd"
                                        type="text"
                                        placeholder="Select your brand"
                                        value={brnd}
                                        onChange={(e) =>
                                            setBrnd(e.target.value)
                                        }
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select your brand"
                                    >
                                        <option value="Pride">Pride</option>
                                        <option value="Science">Science</option>
                                        <option value="Sniper">Sniper</option>
                                        <option value="NMD">NMD</option>
                                        <option value="HubLeashs">
                                            HubLeashs
                                        </option>
                                        <option value="MOREY">MOREY</option>
                                        <option value="OGM">OGM</option>
                                        <option value="GT">GT</option>
                                        <option value="No6.">No6.</option>
                                        <option value="Gyroll">Gyroll</option>
                                        <option value="QCD">QCD</option>
                                        <option value="VS">VS</option>
                                        <option value="Manta">Manta</option>
                                        <option value="Wave">Wave</option>
                                        <option value="Tribe">Tribe</option>
                                        <option value="Found">Found</option>
                                        <option value="Funkshen">
                                            Funkshen
                                        </option>
                                        <option value="Custom X">
                                            Custom X
                                        </option>
                                        <option value="BZ">BZ</option>
                                        <option value="662">662</option>
                                        <option value="BZ">BZ</option>
                                        <option value="Empire">Empire</option>
                                        <option value="Toobs">Toobs</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="tp"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="tp"
                                        name="tp"
                                        type="text"
                                        placeholder="Type leash"
                                        value={tp}
                                        onChange={(e) => setTp(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the type name"
                                    >
                                        <option value="Hand">Hand</option>
                                        <option value="Biceps">Biceps</option>
                                        <option value="Fin">Fin</option>
                                    </select>
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
                                        title="Write a few sentences about this leash."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write a few sentences about this leash.
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="clrs"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Colors
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="clrs"
                                        name="clrs"
                                        value={clrs}
                                        onChange={(e) =>
                                            handleMultiSelectChange(e, setClrs)
                                        }
                                        multiple
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select the colors"
                                    >
                                        <option value="Black">Black</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Blue marine">
                                            Blue marine
                                        </option>
                                        <option value="Blue azur">
                                            Blue azur
                                        </option>
                                        <option value="Red">Red</option>
                                        <option value="White">White</option>
                                        <option value="Cyan">Cyan</option>
                                        <option value="Green">Green</option>
                                        <option value="Dark green">
                                            Dark green
                                        </option>
                                        <option value="Pink">Pink</option>
                                        <option value="Yellow">Yellow</option>
                                        <option value="Orange">Orange</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="prc"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="prc"
                                        name="prc"
                                        type="number"
                                        placeholder="Price value"
                                        value={prc}
                                        onChange={(e) => setPrc(e.target.value)}
                                        pattern="^\d{1,3}([,.]\d)?$"
                                        step="0.5"
                                        min="1"
                                        max="250"
                                        className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the price value"
                                    />
                                    <p className="validator-hint">
                                        Must be a valid number, integer or
                                        decimal
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="photo"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Photo
                                </label>
                                <img
                                    src={pht}
                                    alt="photo"
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
                                                htmlFor="pht"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="pht"
                                                    name="pht"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={(e) =>
                                                        setPht(e.target.value)
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
                                        title="Select the accessory visiblity"
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
export default LeashNew;
