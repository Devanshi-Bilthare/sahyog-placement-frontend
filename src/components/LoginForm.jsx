import React, { useState } from 'react';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCandidate } from '../features/candidate/candidateSlice';

const LoginForm = ({ toggleForm }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       dispatch(loginCandidate(formData))

        setTimeout(() => {
            navigate('/')
            // window.location.reload()
        }, 1000);
    };

    return (
        <div className="login pt-5 pb-5">
 <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2 className='register_heading'>Login Now...</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='btn1' type="submit">Login</button>
            </form>
            <p className="toggle-text">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
        </div>

    );
};

export default LoginForm;
