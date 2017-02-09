export const selectedAppointment = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_APPOINTMENT':
      return payload;
    default:
      return state;
  }
};
