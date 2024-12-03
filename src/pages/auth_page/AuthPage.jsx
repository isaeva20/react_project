import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../store/auth";
import { Button } from "@consta/uikit/Button";
import { Informer } from '@consta/uikit/Informer';

const AuthPage = () => {
    const [formData, setFormData] = React.useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/user');
        }
    }, [token, navigate]);


    const fieldChangeHandle = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const formSubmitHandle = (evt) => {
        evt.preventDefault();
        dispatch(login(formData));
    };

    return (
        <>
            <h1 className="auth-page-title">Authorization</h1>
            <div className="feedback-form-container">
                <form className="feedback-form">
                    <label htmlFor="username">Login:</label>
                    <input id="username" name="username" value={formData.username} onChange={fieldChangeHandle} />
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" value={formData.password} onChange={fieldChangeHandle} />
                    {error && (
                        <Informer
                            label={error}
                            view="filled"
                            status="alert"
                            className="feedback-form-informer"
                        />
                    )}
                    <Button size="m" label="Log in" form="round" onClick={formSubmitHandle} disabled={loading} />
                </form>
            </div>
        </>
    );
};

export default AuthPage;

