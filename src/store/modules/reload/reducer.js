import produce from 'immer';

const INITIAL_STATE = {
  status: null,
};

export default function reload(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@reload/RELOAD_REQUEST':
        draft.status = action.payload.status;
        break;
      default:
    }
  });
}
