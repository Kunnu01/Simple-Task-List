import { keyBy } from 'lodash'
import { callApi } from "../utils/callApi";

export const FETCH_AND_SET_TASKS = 'FETCH_AND_SET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const SET_LOADING_TASKS = 'SET_LOADING_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UN_COMPLETE_TASK = 'UN_COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

const setTasks = () => async (dispatch) => {
  dispatch(setLoadingTasks())
  const { data } = await callApi('GET', '/tasks')
  const tasksById = keyBy(data, 'id')
  return dispatch({
    type: FETCH_AND_SET_TASKS,
    payload: tasksById,
  })
}

const addTask = (description) => async (dispatch) => {
  const task = await callApi('POST', '/tasks',  { description })
  return dispatch({
    type: ADD_TASK,
    payload: task.data,
  })
}

const updateTask = (taskId, updatedDescription) => async (dispatch) => {
  const updatedTask = await callApi('PUT', `/tasks/${taskId}`, { description: updatedDescription })
  return dispatch({
    type: UPDATE_TASK,
    payload: updatedTask.data
  })
}

const completeTask = (taskId) => async (dispatch) => {
  const completeTask = await callApi('PUT', `/tasks/${taskId}/completed`)

  return dispatch({
    type: COMPLETE_TASK,
    payload: completeTask.data,
  })
}

const unCompleteTask = (taskId) => async (dispatch) => {
  const completeTask = await callApi('PUT', `/tasks/${taskId}/uncompleted`)

  return dispatch({
    type: UN_COMPLETE_TASK,
    payload: completeTask.data,
  })
}

const setLoadingTasks = () => ({
  type: SET_LOADING_TASKS,
})

const deleteTask = (taskId) => async (dispatch)=> {
  await callApi('DELETE', `/tasks/${taskId}`)

  return dispatch({
    type: 'DELETE_TASK',
    payload: taskId,
  })
}

export {
  setTasks,
  addTask,
  setLoadingTasks,
  updateTask,
  completeTask,
  unCompleteTask,
  deleteTask,
}
