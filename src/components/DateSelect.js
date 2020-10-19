import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import {selectDate} from '../actions/index';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";


const DateSelect = () => {
    const [cehckInDate, setCehckInDate] = useState(new Date());
    const [cehckOutDate, setCehckOutDate] = useState(new Date());

    const dateReducer = useSelector((state) => state.dateReducer);

    useEffect(() => {
        if(dateReducer.checkIn && dateReducer.checkOut) {
            setCehckInDate(dateReducer.checkIn);
            setCehckOutDate(dateReducer.checkOut);
        }
    }, []);

    const dispatch = useDispatch();

    const location = useLocation();

    const history = useHistory();

    const goToPage = () => {
        let allDate = {};

        allDate.checkInDate = cehckInDate;
        allDate.checkOutDate = cehckOutDate;
        dispatch(selectDate(allDate))
        history.push('/room-select')
    }
    return(
        <div className="date-select-area">
            <div className="check">
            <p>Check-in Tarihi :</p>
            <DatePicker
                selected={cehckInDate}
                onChange={date => setCehckInDate(date)}
            />
            </div>
            <div className="check">
            <p>Check-out Tarihi :</p>
            <DatePicker
                selected={cehckOutDate}
                onChange={date => setCehckOutDate(date)}
            />
            </div>
            <div className="button-area">
            <button type="button" className={`btn btn-secondary ${location.pathname === "/" && 'button-disabled'}`}>Geri</button>
            <button onClick={() => goToPage()} type="button" className="btn btn-secondary">İleri</button>
            </div>
        </div>
    )
};

export default DateSelect;