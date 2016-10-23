const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export default function incrementAsync() {
  return dispatch => {
    dispatch(increment());
  };
}
