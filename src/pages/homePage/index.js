import React from 'react';
import DateSelect from '../../components/DateSelect';
import HeaderTab from '../../components/HeaderTab';

const HomePage = () => {
    return(
        <div className="container">
            <div className="home col-lg-6">
                <HeaderTab active="date" />
                <DateSelect />
            </div>
        </div>
    )
}

export default HomePage;