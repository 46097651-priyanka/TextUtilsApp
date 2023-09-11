import { configureStore , createListenerMiddleware } from '@reduxjs/toolkit';
import themeReducer from './themes/toggleTheme';
import textReducer , {textActions} from './themes/text/textSlice';
import alertReducer, { alertActions } from './themes/alert/alertSlice';
import messages from './showMessages.json';

const textListenerMiddleware = createListenerMiddleware();
const alertListenerMiddleware = createListenerMiddleware();
let alertTimeoutID;

textListenerMiddleware.startListening({
  predicate(action, currState, nextState) {
    if (
      action.type === 'text/exec' ||
      action.type === 'text/undo' ||
      action.type === 'text/redo' ||
      action.type === 'text/updateText' ||
      action.type.search('alert/') !== -1 ||
      action.type.search('theme/') !== -1
    )
      return false;
    else return true;
  },
  effect(action, listenerApi) {
    listenerApi.dispatch(
      textActions.exec({ prevText: listenerApi.getOriginalState().text.text })
    );
  },
});

alertListenerMiddleware.startListening({
  predicate(action, currState, nextState) {
    if (
      action.type === 'text/exec' ||
      action.type === 'text/undo' ||
      action.type === 'text/redo' ||
      action.type === 'text/updateText' ||
      action.type.search('alert/') !== -1 ||
      action.type.search('theme/') !== -1
    )
      return false;
    else return true;
  },
  effect(action, listenerApi) {
    const type = listenerApi.getState().text.status;
    const message = messages[action.type][type];

    clearTimeout(alertTimeoutID);

    listenerApi.dispatch(
      alertActions.setAlert({
        message,
        type,
      })
    );

    alertTimeoutID = setTimeout(
      () => listenerApi.dispatch(alertActions.removeAlert()),
      2000
    );
  },
});


const store = configureStore({
  reducer: {
    theme: themeReducer,
    text: textReducer,
    alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      textListenerMiddleware.middleware,
      alertListenerMiddleware.middleware,
    ]),
});
store.subscribe(() => console.log(store.getState()));

export default store;