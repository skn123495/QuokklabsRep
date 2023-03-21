import {APP_TOKEN} from '../ActionTypes';

export const getTokenAction = type => ({
  type: APP_TOKEN,
  payload: type,
});
