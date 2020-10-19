import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import { useLocation } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import 'react-credit-cards/es/styles-compiled.css';
const CreditCard = () => {
    const [state, setState] = useState({ cvc: '', expiry: '', focus: '', name: '', number: ''})


    const handleInputFocus = (e) => {
        const { name } = e.target;
        setState(prevState => ({...prevState, focus: name}))
    }
      
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setState(prevState => ({...prevState, [name]: value}));
    }
    const location = useLocation();
    const history = useHistory();
    const goToPage = () => {
      return null;
    }

    const goBack = () => {
      history.goBack();
    }
    return(
        <div id="PaymentForm payments">
          <Cards
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focus}
            name={state.name}
            number={state.number}
          />
          <form className="form-area">
            <input
              className="form-control credit-form"
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength="16"
            />
            <input
              className="form-control credit-form"
              type="text"
              name="name"
              placeholder="Ad - Soyad"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              className="form-control credit-form"
              type="tel"
              name="expiry"
              placeholder="expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength="4"
            />
            <input
              className="form-control credit-form"
              type="tel"
              name="cvc"
              placeholder="cvc"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength="3"
            />
          </form>
          <div className="button-area">
              <button  onClick={() => goBack()} type="button" className={`btn btn-secondary ${location.pathname === "/" && 'button-disabled'}`}>Geri</button>
              <button onClick={() => goToPage()} type="button" className="btn btn-secondary">İleri</button>
          </div>
      </div>
    )
}

export default CreditCard;