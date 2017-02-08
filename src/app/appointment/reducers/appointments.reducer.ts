export const appointments = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_APPOINTMENT':
      return payload;
    case 'CREATE_APPOINTMENT':
      return [...state, payload];
    case 'UPDATE_APPOINTMENT':
      return state.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });
    case 'DELETE_APPOINTMENT':
      return state.filter(item => {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
};
