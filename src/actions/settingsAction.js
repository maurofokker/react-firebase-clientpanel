import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from './types';

// these will send type to REDUCERS

export const setDisableBalanceOnAdd = () => {
  // get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  // toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  // set to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  // get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  // toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  // set to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};

export const setAllowRegistration = () => {
  // get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  // toggle
  settings.allowRegistration =
    !settings.allowRegistration == null ? false : !settings.allowRegistration;

  // set to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
