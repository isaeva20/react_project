import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "@consta/uikit/Layout";
import {Button} from "@consta/uikit/Button"
import { AppRoute } from "../../const";
import { logout } from "../../store/auth";
import { useSelector, useDispatch } from "react-redux";
import { User } from '@consta/uikit/User';


const getStyleForNavLink = ({ isActive }) =>
    isActive
        ? {
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
        }
        : {};

const Navigation = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return(
        <Layout>
            <NavLink to="/service">
                <Button label="Service"></Button> 
            </NavLink>
            <NavLink to="/">
                <Button label="Main page"></Button>
            </NavLink>
            <Layout margin-right= "auto">
                    {token && user ? (
                        <Layout className="header__registration">
                            <NavLink to={AppRoute.user} style={getStyleForNavLink}>
                                <User
                                    size="l"
                                    avatarUrl={user.image || "https://via.placeholder.com/40"}
                                    name={`${user.firstName} ${user.lastName}`}
                                    info={`${user.email}`}
                                    className="header__registration"
                                />
                            </NavLink>
                            <Button
                                size="l"
                                label="Выход"
                                view="clear"
                                form="round"
                                className="header__logout"
                                onClick={handleLogout}
                            />
                        </Layout>
                    ) : (
                        <NavLink to={AppRoute.auth} style={getStyleForNavLink} className={"header__link"}>
                            <Button size="l" label="Вход" view="clear" form="round" className="header__registration" />
                        </NavLink>
                    )}
                    </Layout>
        </Layout>
)

}

export default Navigation;