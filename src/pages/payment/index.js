import React from 'react';
import { useSelector } from 'react-redux'
import HeaderTab from '../../components/HeaderTab';
import CreditCard from '../../components/CreditCard';



const Payment = () => {
    const dateReducer = useSelector((state) => state.dateReducer);
    const roomReducer = useSelector((state) => state.roomReducer);
    return(
        <div className="container">
            <div className="home col-lg-6">
                <HeaderTab active="payment" />
                    <div>Check-in: {JSON.stringify(dateReducer.checkIn)}</div>
                    <div>Check-out: {JSON.stringify(dateReducer.checkOut)}</div>
                    <div>Oda Tipi: {roomReducer.roomType}</div>
                    <div>Manzara: {roomReducer.choiceOfScenery}</div>
                <CreditCard />
            </div>
        </div>
    )
}
 
export default Payment;