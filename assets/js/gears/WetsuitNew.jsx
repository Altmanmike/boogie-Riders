import { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import instance from "../axiosConfig";

const WetsuitNew = ({ onlineUser }) => {
    const [groupsUserList, setGroupsUserList] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [brnd, setBrnd] = useState("");
    const [mdl, setMdl] = useState("");
    const [tp, setTp] = useState("");
    const [sz, setSz] = useState([]);
    const [desc, setDesc] = useState("");
    const [clrs, setClrs] = useState([]);
    const [gdr, setGdr] = useState("");
    const [thcknss, setThcknss] = useState("");
    const [prc, setPrc] = useState("");
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
                    model: mdl,
                    type: tp,
                    size: sz,
                    description: desc,
                    colors: clrs,
                    gender: gdr,
                    thickness: thcknss,
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
            mdl,
            tp,
            sz,
            desc,
            clrs,
            gdr,
            thcknss,
            prc,
            pht,
            usr,
            vsblt,
            selectedGroups,
        };
        console.log("Formulaire wetsuit soumis :", formData);
        postData(wetsuitNewEndPoint);
    };

    const handleMultiSelectChange = (e, setterFunction) => {
        const selectedOptions = Array.from(e.target.options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setterFunction(selectedOptions);
    };

    const handleMultiSelectChangeBis = (e, setterFunction, sourceList = []) => {
        const selectedValues = Array.from(e.target.selectedOptions).map(
            (option) => parseInt(option.value)
        );
        const selectedObjects = sourceList.filter((item) =>
            selectedValues.includes(item.id)
        );
        setterFunction(selectedObjects);
    };

    const groupsUserEndPoint = "/groups?page=1&user=" + userId;
    const wetsuitNewEndPoint = "/wetsuits";

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
                        <h2 className="card-title mt-10">Wetsuit profile</h2>

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
                                        <option value="Gyroll">Gyroll</option>
                                        <option value="Rip Curl">
                                            Rip Curl
                                        </option>
                                        <option value="Quicksilver">
                                            Quicksilver
                                        </option>
                                        <option value="O'Neill">O'Neill</option>
                                        <option value="Billabong">
                                            Billabong
                                        </option>
                                        <option value="West">West</option>
                                        <option value="H2Odyssey">
                                            H2Odyssey
                                        </option>
                                        <option value="Hubboards">
                                            Hubboards
                                        </option>
                                        <option value="eBodyboarding">
                                            eBodyboarding
                                        </option>
                                        <option value="Jr. Guards">
                                            Jr. Guards
                                        </option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="mdl"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Model
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="mdl"
                                        name="mdl"
                                        type="text"
                                        placeholder="Model name"
                                        value={mdl}
                                        onChange={(e) => setMdl(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the model name"
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
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="tp"
                                        name="tp"
                                        value={tp}
                                        type="text"
                                        placeholder="Select your size"
                                        onChange={(e) => setTp(e.target.value)}
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select your type"
                                    >
                                        <option value="Integral">
                                            Integral
                                        </option>
                                        <option value="Shorty">Shorty</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="sz"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Size
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="sz"
                                        name="sz"
                                        value={sz}
                                        type="text"
                                        placeholder="Select your size"
                                        onChange={(e) => setSz(e.target.value)}
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select your size"
                                    >
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="SM">SM</option>
                                        <option value="MS">MS</option>
                                        <option value="M">M</option>
                                        <option value="ML">ML</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="2XL">2XL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
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
                                        title="Write a few sentences about this wetsuit."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write a few sentences about this wetsuit.
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
                                    htmlFor="gdr"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Gender
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="gdr"
                                        name="gdr"
                                        value={gdr}
                                        type="text"
                                        placeholder="Select your size"
                                        onChange={(e) => setGdr(e.target.value)}
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select your gender"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Woman">Woman</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="thcknss"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Thickness
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="thcknss"
                                        name="thcknss"
                                        value={thcknss}
                                        type="text"
                                        placeholder="Select your size"
                                        onChange={(e) =>
                                            setThcknss(e.target.value)
                                        }
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select your thickness"
                                    >
                                        <option value="1/1mm">1/1mm</option>
                                        <option value="2/2mm">2/2mm</option>
                                        <option value="3/2mm">3/2mm</option>
                                        <option value="4/3mm">4/3mm</option>
                                        <option value="5/4mm">5/4mm</option>
                                        <option value="6/5mm">6/5mm</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
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
                                        max="2000"
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
export default WetsuitNew;
