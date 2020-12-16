import {
  FETCH_AND_SET_TASKS,
  ADD_TASK,
  SET_LOADING_TASKS,
  UPDATE_TASK,
  COMPLETE_TASK,
  UN_COMPLETE_TASK,
  DELETE_TASK,
} from '../actions/list'

const initialState = {
  tasks: [],
  isLoading: true,
};

const updateTask = (state, payload) => ({
  ...state,
  tasks: {
    ...state.tasks,
    [payload.id]: payload,
  }
})

const tinyList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AND_SET_TASKS:
      console.log({ action })
      const data = {
        ...state,
        tasks: { ...state.tasks, ...action.payload },
        isLoading: false,
      };
      return data;
    
    case SET_LOADING_TASKS:
      return {
        ...state,
        isLoading: true,
      };
    
    case ADD_TASK:
      return updateTask(state, action.payload)
    
    case UPDATE_TASK:
      return updateTask(state, action.payload);
    
    case COMPLETE_TASK:
      return updateTask(state, action.payload);
    
    case UN_COMPLETE_TASK:
      return updateTask(state, action.payload);
    
    case DELETE_TASK:
      const tasks = state.tasks
      delete tasks[action.payload]
      return {
        ...state,
        tasks,
      }
    
    default:
      return { ...state };
  }
}

export { tinyList }
