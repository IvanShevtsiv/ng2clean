export const selectedPatient = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_PATIENT':
      return payload;
    default:
      return state;
  }
};
