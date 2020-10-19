import { act } from "react-dom/test-utils";
import { DATE_SELECTED } from "../actions/index.js";

const initialState = {
    checkIn: '',
    checkOut: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATE_SELECTED:
      return {
        ...state,
        checkIn: action.payload.checkInDate,
        checkOut: action.payload.checkOutDate
      };
    default:
      return state;
  }
};
