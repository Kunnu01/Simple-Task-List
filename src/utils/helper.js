import moment from 'moment-timezone'

const sortTasks = (taskA, taskB) => {
  if (taskA.completed_at && taskB.completed_at) {
    return moment(taskA.completed_at).isAfter(moment(taskB.completed_at)) ? 1 : -1
  }
  
  if (taskA.completed_at) return 1

  if (taskB.completed_at) return -1

  return moment(taskA.created_at).isAfter(moment(taskB.created_at)) ? -1 : 1
}

const getSortedTasks = (tasksObject) => {
  const tasks = Object.values(tasksObject)
  const sorted = tasks.sort(sortTasks)
  return sorted
}

export { getSortedTasks }
