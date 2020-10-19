
export const DATE_SELECTED = "DATE_SELECTED";
export const ROOM_TYPE_SELECTED = "ROOM_TYPE_SELECTED";

export const selectDate = (date) => {
    return {
      type: DATE_SELECTED,
      payload: date,
    };
};


export const selectRoomType = (roomType) => {
    return {
      type: ROOM_TYPE_SELECTED,
      payload: roomType,
    };
};
  