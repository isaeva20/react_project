import React from 'react'
import { Layout } from '@consta/uikit/Layout';
import Service from '../../components/services/Service';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth'


const ServicePage = () => {
    const {isAuth} = useAuth();
    const navigate = useNavigate();
    if (isAuth) {
       navigate('/login');
       return;
    }
    return(
        <Layout className='elements' direction='column'>
            <Layout className='title'>
            <h1 style={{textPropAlign: "center", color: "blueviolet"}}>Services</h1>
            </Layout>
            <hr></hr>
            <Layout className='cards'>
            <Service></Service>
            </Layout>
        </Layout>
    )
}

export default ServicePage;