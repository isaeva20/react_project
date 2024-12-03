import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { Text } from "@consta/uikit/Text";
import { Loader } from "@consta/uikit/Loader";

const ProfilePage = () => {
    const { user, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/auth');
        } else {
            dispatch(fetchUser());
        }
    }, [dispatch, token, navigate]);

    if (!user) return <Loader size="m" className="loader" />;

    return (
        <>
            <h1 className="profile-page-title">Profile</h1>
            <div className='profile'>
                <div className="profile-info">
                    <div className="profile-details">
                        <Text lineHeight="m" view="primary" className="profile-name">{`${user.firstName} ${user.lastName}`}</Text>
                        <Text lineHeight="m" view="primary" className="profile-email">{user.email}</Text>
                        <Text lineHeight="m" view="primary" className="profile-email">{user.birthDate}</Text>
                    </div>
                </div>
                <div className="profile-image">
                    <img src={user.image} alt="User" className="card-image" />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
