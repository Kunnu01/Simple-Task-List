export const FETCH_AND_SET_TASKS = 'FETCH_AND_SET_TASKS';

export const setTasks = (tasks) => ({
  type: FETCH_AND_SET_TASKS,
  payload: tasks,
})
