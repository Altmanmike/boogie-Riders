export default function Messenger() {
    return (
        <div className="fixedMessenger">
            <div className="collapse bg-base-100 border-base-300 border">
                <input type="checkbox" />

                <div className="collapse-title font-semibold inline-flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://www.sports.gouv.fr/sites/default/files/2022-08/bodyboard-ffsurf-wecreative-jpg-490.jpg"
                                />
                            </div>
                        </div>
                        <div className="text-sm">LASTNAME Firstname</div>
                    </div>
                    <div className="inline-flex items-end">
                        <div className="text-sm">Open Chat</div>
                    </div>
                </div>

                <div className="collapse-content text-sm">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        className="btn"
                        onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                        }
                    >
                        FRIEND CHATTING WITH ME
                    </button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">
                                Press ESC key or click outside to close
                            </h3>
                            <div className="divider"></div>
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Obi-Wan Kenobi
                                    <time className="text-xs opacity-50">
                                        12:45
                                    </time>
                                </div>
                                <div className="chat-bubble">
                                    You were the Chosen One!
                                </div>
                                <div className="chat-footer opacity-50">
                                    Delivered
                                </div>
                            </div>
                            <div className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Anakin
                                    <time className="text-xs opacity-50">
                                        12:46
                                    </time>
                                </div>
                                <div className="chat-bubble">I hate you!</div>
                                <div className="chat-footer opacity-50">
                                    Seen at 12:46
                                </div>
                            </div>
                            <div className="divider"></div>
                            <form action="" method="post">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">
                                        Write something here ...
                                    </legend>
                                    <textarea
                                        className="textarea mx-auto w-100"
                                        placeholder="Type here.."
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Send
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};