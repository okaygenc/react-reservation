import { ROOM_TYPE_SELECTED } from "../actions/index.js";

const initialState = {
    roomType: '',
    choiceOfScenery: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROOM_TYPE_SELECTED:
        return {
            ...state,
            roomType: action.payload.roomType,
            choiceOfScenery: action.payload.choiceOfScenery
        }
    default:
      return state;
  }
};
