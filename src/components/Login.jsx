import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button'
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from './../service/Firebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // const handleLogin = (e) => {
    //     signInWithPopup(auth, provider)
    //         .then((res) => {
    //             console.log('User signed in:', res.user);
    //         })
    //         .catch((err) => {
    //             console.error('Error during sign in:', err.message);
    //         });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email,
            password
        };
        console.log(user);

        axios.post("https://reqres.in/api/login", user)
            .then((res) => {
                let token = res.data.token;
                localStorage.setItem("token", token);
                alert("Login successful 😍");
                setEmail("");
                setPassword("");
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    return (
        <>
            <div className="container mt-0 p-0 mb-3">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-8 col-xl-8 mt-xl-5" style={{ borderRadius: '25px', border: "1px solid grey", backgroundColor: "white" }}>
                        <div className="text-center">
                            <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" width={650} style={{ overflow: "hidden", borderRadius: "25px" }} className="d-block img-fluid" alt="Sign In Image" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="whatsappUpdates" />
                                <label className="form-check-label text-black text-left" htmlFor="whatsappUpdates">Get updates on WhatsApp</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign In</button>
                        </form>
                        <GoogleButton
                            onClick={() => { console.log('Google button clicked') }}
                        />
                        <div className="mt-3">
                            <p style={{ display: "block", textAlign: "center", color: 'black' }}>New member? <a href="#" className='text-center'>Create an Account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
