import { FETCH_AND_SET_TASKS } from '../actions/list'

const initialState = {
  tasks: [],
};

const tinyList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AND_SET_TASKS:
      const data = {
        ...state,
        tasks: action.payload,
      };
      return data;
    default:
      return { ...state };
  }
}

export { tinyList }
