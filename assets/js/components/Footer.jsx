const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
            <aside>
                <img src="assets/logo.png" alt="logo" />
                <p className="font-bold">
                    Boogie Riders inc.
                    <br />
                    Connecting bodyboarders since 2025
                </p>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </aside>
        </footer>
    );
}
export default Footer;