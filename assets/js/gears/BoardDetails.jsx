import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const BoardDetails = ({
    id,
    brand,
    model,
    size,
    description,
    colors,
    core,
    tail,
    stringer,
    mesh,
    slick,
    price,
    photoFront,
    photoBack,
    createdAt,
    updatedAt,
    user,
}) => {
    const [brnd, setBrnd] = useState(brand);
    const [mdl, setMdl] = useState(model);
    const [sz, setSz] = useState(size);
    const [desc, setDesc] = useState(description);
    const [clrs, setClrs] = useState(colors);
    const [cr, setCr] = useState(core);
    const [tl, setTl] = useState(tail);
    const [strngr, setStrngr] = useState(stringer);
    const [msh, setMsh] = useState(mesh);
    const [slck, setSlck] = useState(slick);
    const [prc, setPrc] = useState(price);
    const [phtFrnt, setPhtFrnt] = useState(photoFront);
    const [phtBck, setPhtBck] = useState(photoBack);
    const [crtdAt, setCrtdAt] = useState(createdAt);
    const [updtdAt, setUpdtdAt] = useState(updatedAt);
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
            brand,
            model,
            size,
            description,
            colors,
            core,
            tail,
            stringer,
            mesh,
            slick,
            price,
            photoFront,
            photoBack,
            createdAt,
            updatedAt,
            user,
        };
        console.log("Formulaire board soumis :", formData);
    };
    
    const handleMultiSelectChange = (e, setterFunction) => {
        const selectedOptions = Array.from(e.target.options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setterFunction(selectedOptions);
    };
    
    return (
        <>
            <div className="container mx-auto m-10 w-2xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl h-full mb-100">
                <form className="mt-20 mx-10" onSubmit={handleSubmit}>
                    <div className="border-b border-gray-900/10 pt-1 pb-12">
                        <h2 className="card-title mt-10">Board profile</h2>

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
                                        <option value="Hubboards">
                                            Hubboards
                                        </option>
                                        <option value="MOREY">MOREY</option>
                                        <option value="GT">GT</option>
                                        <option value="No6.">No6.</option>
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
                                        title="Write a few sentences about this board."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write a few sentences about this board.
                                </p>
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
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="40.5">40.5</option>
                                        <option value="41">41</option>
                                        <option value="41.5">41.5</option>
                                        <option value="42">42</option>
                                        <option value="42.5">42.5</option>
                                        <option value="43">43</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
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
                                    htmlFor="cr"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Core
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="cr"
                                        name="cr"
                                        type="text"
                                        placeholder="Core name"
                                        value={cr}
                                        onChange={(e) => setCr(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the core name"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="tl"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Tail
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="tl"
                                        name="tl"
                                        type="text"
                                        placeholder="Tail name"
                                        value={tl}
                                        onChange={(e) => setTl(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the tail name"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="strngr"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Stringer
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="strngr"
                                        name="strngr"
                                        type="text"
                                        placeholder="Stringer name"
                                        value={strngr}
                                        onChange={(e) =>
                                            setStrngr(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the stringer name"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="msh"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Mesh
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="msh"
                                        name="msh"
                                        type="text"
                                        placeholder="Mesh name"
                                        value={msh}
                                        onChange={(e) => setMsh(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the mesh name"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="slck"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Slick
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="slck"
                                        name="slck"
                                        type="text"
                                        placeholder="Slick name"
                                        value={slck}
                                        onChange={(e) =>
                                            setSlck(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the slick name"
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
                                        min="1"
                                        max="1000"
                                        className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the price value"
                                    />
                                    <p className="validator-hint">
                                        Must be a valid number, integer or decimal
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="photo-front"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Photo Front
                                </label>
                                <img
                                    src={phtFrnt}
                                    alt="photo-front"
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
                                                htmlFor="phtFrnt"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="phtFrnt"
                                                    name="phtFrnt"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={(e) =>
                                                        setPhtFrnt(
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

                            <div className="col-span-full">
                                <label
                                    htmlFor="photo-back"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Photo Back
                                </label>
                                <img
                                    src={phtBck}
                                    alt="photo-back"
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
                                                htmlFor="phtBck"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="phtBck"
                                                    name="phtBck"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={(e) =>
                                                        setPhtBck(
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
export default BoardDetails;
