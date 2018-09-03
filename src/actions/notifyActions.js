import { NOTIFY_USER } from './types';

export const notifyUser = (message, messageType) => {
  // return the reducer and will be catch in the switch case of notifyReducer.js
  return {
    type: NOTIFY_USER,
    message, // is the same as message: message but key and value are the same
    messageType
  };
};
