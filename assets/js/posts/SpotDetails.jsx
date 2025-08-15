import { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const SpotDetails = ({
    id,
    name,
    cover,
    lat,
    lon,
    location,
    description,
    waveType,
    bestConditions,
    difficultyLevel,
    createdAt,
    updatedAt,
}) => {
    const [nm, setNm] = useState(name);
    const [cvr, setCvr] = useState(cover);
    const [lt, setLt] = useState(lat);
    const [ln, setLn] = useState(lon);
    const [lctn, setLctn] = useState(location);
    const [desc, setDesc] = useState(description);
    const [wvTp, setWvTp] = useState(waveType);
    const [bstCndtns, setBstCndtns] = useState(bestConditions);
    const [dffcltLvl, setDffcltLvl] = useState(difficultyLevel);
    const [crtdAt, setCrtdAt] = useState(createdAt);
    const [updtdAt, setUpdtdAt] = useState(updatedAt);

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
            name,
            cover,
            lat,
            lon,
            location,
            description,
            waveType,
            bestConditions,
            createdAt,
            updatedAt,
        };
        console.log("Formulaire spot soumis :", formData);
    };

    useEffect(() => {
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
            <div className="container mx-auto m-10 w-2xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl h-full mb-100">
                <form className="mt-20 mx-10" onSubmit={handleSubmit}>
                    <div className="border-b border-gray-900/10 pt-1 pb-12">
                        <h2 className="card-title mt-10">Spot profile</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label
                                    htmlFor="nm"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="nm"
                                        name="nm"
                                        type="text"
                                        placeholder="Event name"
                                        value={nm}
                                        onChange={(e) => setNm(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the event name"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="photo"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Cover
                                </label>
                                <img
                                    src={cvr}
                                    alt="cover"
                                    className="photo-post"
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
                                        title="Write the main content of the article."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write the few sentences about the spot.
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="wvTp"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Wave type
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="wvTp"
                                        name="wvTp"
                                        type="text"
                                        placeholder="Spot wave type"
                                        value={wvTp}
                                        onChange={(e) =>
                                            setWvTp(e.target.value)
                                        }
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Select the wave type"
                                    >
                                        <optgroup label="Background type">
                                            <option value="Beach break">
                                                Beach break
                                            </option>
                                            <option value="Reef break">
                                                Reef break
                                            </option>
                                            <option value="Shallow reef">
                                                Shallow reef
                                            </option>
                                            <option value="Point break">
                                                Point break
                                            </option>
                                            <option value="Rivermouth">
                                                Rivermouth
                                            </option>
                                            <option value="Jetty">Jetty</option>
                                            <option value="Artificial reef">
                                                Artificial reef
                                            </option>
                                        </optgroup>
                                        <optgroup label="Wave direction">
                                            <option value="Right">Right</option>
                                            <option value="Left">Left</option>
                                            <option value="A-frame">
                                                A-frame
                                            </option>
                                            <option value="Closeout">
                                                Closeout
                                            </option>
                                        </optgroup>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="dffcltLvl"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Difficulty level (Ex: 2/5)
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="dffcltLvl"
                                        name="dffcltLvl"
                                        type="number"
                                        placeholder="Spot difficulty"
                                        value={dffcltLvl}
                                        onChange={(e) =>
                                            setDffcltLvl(e.target.value)
                                        }
                                        step="1"
                                        min="0"
                                        max="5"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the spot difficulty"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="bstCndtns"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Best conditions
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="bstCndtns"
                                        name="bstCndtns"
                                        type="text"
                                        placeholder="Best conditions"
                                        value={bstCndtns}
                                        onChange={(e) =>
                                            setBstCndtns(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the spot best conditions"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="lt"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Latitude
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lt"
                                        name="lt"
                                        type="number"
                                        placeholder="Ex: 48.8566"
                                        value={lt}
                                        onChange={(e) => setLt(e.target.value)}
                                        step="any"
                                        min="-90"
                                        max="90"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the event latitude"
                                    />
                                    <p className="validator-hint">
                                        Must be a valid number, decimal
                                    </p>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="ln"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Longitude
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="ln"
                                        name="ln"
                                        type="number"
                                        placeholder="Ex: 48.8566"
                                        value={ln}
                                        onChange={(e) => setLn(e.target.value)}
                                        step="any"
                                        min="-180"
                                        max="180"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the event longitude"
                                    />
                                    <p className="validator-hint">
                                        Must be a valid number, decimal
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="lctn"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Location
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lctn"
                                        name="lctn"
                                        type="text"
                                        placeholder="Event location"
                                        value={lctn}
                                        onChange={(e) =>
                                            setLctn(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the event location"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <div id="map" className="mx-auto"></div>
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
export default SpotDetails;
