const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-primary text-primary-content pt-4 pb-1">
            <aside>
                <img src="assets/logo.png" alt="logo" className="logo-footer" />
                <p className="font-bold">
                    Connecting bodyboarders since 2025
                    <br />
                    <span className="font-normal mt-2">
                        {" "}
                        Copyright © {new Date().getFullYear()} - All right
                        reserved
                    </span>
                </p>
            </aside>
        </footer>
    );
}
export default Footer;