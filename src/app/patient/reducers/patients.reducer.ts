export const patients = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_PATIENT':
      return payload;
    case 'CREATE_PATIENT':
      return [...state, payload];
    case 'UPDATE_PATIENT':
      return state.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });
    case 'DELETE_PATIENT':
      return state.filter(item => {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
};
