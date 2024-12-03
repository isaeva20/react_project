import React from 'react'
import { Layout } from '@consta/uikit/Layout';
import Cards from '../../components/layout/Layouts';

import './MainPage.css'

const MainPage = () => {
    return(
        <Layout className='elements' direction='column'>
            <Layout className='title'>
            <h1 style={{textPropAlign: "center", color: "blueviolet"}}>Главная страница</h1>
            </Layout>
            <hr></hr>
            <Layout className='cards'>
            <Cards></Cards>
            </Layout>
        </Layout>
    )
}

export default MainPage;
