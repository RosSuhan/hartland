import './Footer.css'
import FooterLogo from '/src/assets/hdmBanner.png'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-column">
                <img src={FooterLogo} alt="Hartland Digital Logo" width="500" className="footerLogo" />

                <ul className="footerContactList">
                    <h3 className="footerContactListHeading">Contact Us</h3>
                    <li className="footerContactItem"><a href="tel:+27726768518" className="footerContactLink">072 676 8518</a></li>
                    <li className="footerContactItem"><a href="mailto:info@hartland.tv" className="footerContactLink">info@hartland.tv</a></li>
                </ul>
            </div>
          
            <form action="" method="post" className="footerForm">
                <h3 className="footerContactListHeading">Let Us Contact You</h3>
                <input type="text" name="name" id="name" placeholder="Name" className="footer-form-input" />
                <input type="email" name="email" id="email" placeholder="name@mail.com" className="footer-form-input" />
                <input type="tel" name="telephone" id="tel" placeholder="012 345 6789" className="footer-form-input" />
                <textarea name="message" id="message" rows="3" placeholder="Message" className="footer-form-input"></textarea>
            </form>

            <div className="footer-end">Hartland Digital - All Rights Resevered &copy; {new Date().getFullYear()}</div>
        </footer>
    );
}

export default Footer