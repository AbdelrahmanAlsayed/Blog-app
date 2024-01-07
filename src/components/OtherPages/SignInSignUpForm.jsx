import { Link } from 'react-router-dom';
import Logo from '../Header/Logo';
import { SocialIcons } from '../Footer/FooterBottom';
import { Container } from 'react-bootstrap';
import styles from './SignInSignUpForm.module.css';
import signInImage from '../../assets/signIn.webp';
import { useState } from 'react';



function SignInSignUpForm() {

    const [signin, setSignin] = useState(true);

    const toggleSignInUp = () => {
        setSignin((prevSignIn) => !prevSignIn);

    };
    const handleLogin = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className={styles.bg}>
                <Container className={styles.container}>
                    <div className={styles.left}>
                        <Link to="/" className={styles.logo}>
                            <Logo />
                        </Link>
                        <div className={styles.formContent}>
                            <h1 className={styles.heading}>
                                {signin ? 'Welcome back!' : 'Create Account!'}
                            </h1>
                            <form onSubmit={handleLogin} autoComplete="off" className={styles.form}>
                            {!signin && <input type="text" name="name" placeholder="Your name" required />}
                                <input type="email"  name="email" placeholder="Enter your email"  />
                                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                                <button type="submit">{signin ? 'Log in' : 'Sign up'}</button>
                            </form>
                            <p className={styles.paragraph}>
                                {signin
                                    ? "Don't have an account yet? "
                                    : 'Already have an account? '}
                                <button className={styles.signupBtn} onClick={toggleSignInUp}>
                                    {signin ? 'Sign up' : 'Sign in'}
                                </button>
                            </p>
                        </div>
                        <SocialIcons />
                    </div>
                    <div className={styles.right}>
                        <img src={signInImage} alt={signin ? 'Sign up image' : 'Sign in image'}
                        className={styles.sinInImage}  loading="lazy"/>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default SignInSignUpForm;
