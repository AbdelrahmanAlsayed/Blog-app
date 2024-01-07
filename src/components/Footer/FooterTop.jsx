
import { Container } from 'react-bootstrap';
import styles from "./FooterTop.module.css"
import Logo from '../Header/Logo';
import { IoMdArrowRoundForward } from "react-icons/io";
import splach from "../../assets/splach.webp"
import { Link } from 'react-router-dom';


function FooterTop() {

    return (
        <div className={styles.bg} id='contact'>
            <Container className={styles.container}>
                <div className={styles.logoFooter}>
                    <Link to="/" className={styles.logo}>
                        <Logo />
                    </Link>
                    <img className={styles.splachImage} src={splach} alt='splach image' title='splach image' />
                </div>
                <Link to="contactus" className={styles.contactUsbtn}>
                    Contact Us <IoMdArrowRoundForward />
                </Link>
            </Container>
        </div>
    );
}

export default FooterTop;