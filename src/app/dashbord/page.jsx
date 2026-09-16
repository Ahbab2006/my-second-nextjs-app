import React from 'react';
import Counter from '../components/Counter';

const DashbordPage = () => {
    return (
        <div>
            <h2>Dashbord Page</h2>

<Counter></Counter>

            <ul>
                <li>Dashbord items 01</li>
                <li>Dashbord items 02</li>
                <li>Dashbord items 03</li>
            </ul>
        </div>
    );
};

export default DashbordPage;