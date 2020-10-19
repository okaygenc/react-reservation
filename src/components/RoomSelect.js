import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import {selectRoomType} from '../actions';

const RoomSelect = () => {

    const [roomType, setRoomType] = useState('');
    const [choiceOfScenery, setChoiceOfScenery] = useState('');

    const room = useSelector((state) => state.roomReducer);

    useEffect(() => {
        if(room.roomType && room.choiceOfScenery) {
            setRoomType(room.roomType);
            setChoiceOfScenery(room.choiceOfScenery);
        }
    }, [room]);


    const dispatch = useDispatch();

    const onChangeRoomValue = (event) => {
        setRoomType(event.target.value)
    }

    const onChangeScenery = (event) => {
        setChoiceOfScenery(event.target.value)
    }

    const location = useLocation();
    const history = useHistory();

    const goToPage = () => {
        let allRoomOptions = {};

        allRoomOptions.roomType = roomType;
        allRoomOptions.choiceOfScenery = choiceOfScenery;
        dispatch(selectRoomType(allRoomOptions))
        if(allRoomOptions.roomType && allRoomOptions.choiceOfScenery) {
            history.push('/payment')
        } else {
            alert('Lütfen oda ve manzara seçimi yapınız.');
        }
    }

    const goBack = () => {
        history.goBack();
    }

    return(
        <>
            <div className="option-area">
                <p>Oda Seçimi: </p>
                <div className="options">
                    <input type="radio" onChange={onChangeRoomValue} name="standart" value="Standart" checked={roomType === "Standart" && true}/> Standart
                    <input type="radio" onChange={onChangeRoomValue} name="deluxe" value="Deluxe" checked={roomType === "Deluxe" && true}/> Deluxe
                    <input type="radio" onChange={onChangeRoomValue} name="suit" value="Suit"  checked={roomType === "Suit" && true}/> Suit
                </div>
            </div>
            <div className="option-area">
                <p>Manzara Seçimi: </p>
                <div className="options">
                    <input type="radio" value="Deniz" onChange={onChangeScenery}  checked={choiceOfScenery === "Deniz" && true}/> Deniz
                    <input type="radio" value="Kara" onChange={onChangeScenery}  checked={choiceOfScenery === "Kara" && true}/> Kara
                </div>
            </div>
            <div className="button-area">
            <button onClick={() => goBack()} type="button" className={`btn btn-secondary ${location.pathname === "/" && 'button-disabled'}`}>Geri</button>
            <button onClick={() => goToPage()} type="button" className="btn btn-secondary">İleri</button>
            </div>
        </>
    )
};

export default RoomSelect;