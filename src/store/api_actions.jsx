import { ApiPath } from "../const";

export const getNews = async () => {
    const response = await fetch(ApiPath.news,
        {method: 'GET',}
    );
    return await response.json();
};

export const fetchServices = () => async () => {
    const response = await fetch(ApiPath.services,
        { method: 'GET' });
    return await response.json();
};

export const fetchServiceDetails = (id) => async () => {
    const response = await fetch(`${ApiPath.services}/${id}`, 
        { method: 'GET' });
    return await response.json();
};

export const getAuthTokenAction = async (username, password) => {
    const response = await fetch(ApiPath.auth_login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password, expiresInMins: 10 }),
    });
    return await response.json();
};

export const getUserinfoAction = async () => {
    const response = await fetch(ApiPath.auth_me, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    return await response.json();
};