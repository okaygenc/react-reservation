import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import HeaderTab from '../../components/HeaderTab';
import RoomSelect from '../../components/RoomSelect';


const RoomPage = () => {
    const dateReducer = useSelector((state) => state.dateReducer);
    return(
        <div className="container">
            <div className="home col-lg-6">
                <HeaderTab active="room" />
                <div>Check-in: {JSON.stringify(dateReducer.checkIn)}</div>
                <div>Check-out: {JSON.stringify(dateReducer.checkOut)}</div>
                <RoomSelect />
            </div>
        </div>
    )
}

export default RoomPage;