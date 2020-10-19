import React from 'react';


const HeaderTab = (props) => {
    return(
        <div className="header-row">
            <div className={`tab-area ${props.active === 'date' && 'active'}`}>Tarih</div>
            <div className={`tab-area ${props.active === 'room' && 'active'}`}>Oda</div>
            <div className={`tab-area ${props.active === 'payment' && 'active'}`}>Ödeme</div>
        </div>
    )
};

export default HeaderTab;